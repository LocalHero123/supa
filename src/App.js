import { useEffect, useState } from 'react';
import { useSubscription, useRealtime } from 'react-supabase';
import './App.css';
import { supabase } from './client';
import Loader from './components/Loader';

export default function App() {
   const [value, setValue] = useState('')

   const [{ data: messages, error, fetching }, reexecute] = useRealtime('messages')

   async function createMessage(e) {
      e.preventDefault()
      const { data, error } = await supabase.from('messages').insert({ message: value })
      setValue('')
   }

   return (
      <div className="App">
         <form action="">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={createMessage}>Send</button>
         </form>

         {fetching && <Loader />}
         <div>{messages && messages.map(i => <div key={i.id}>{i.message}</div>)}</div>
      </div>
   );
}

