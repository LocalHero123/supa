import { useRef, useState } from 'react';
import './../App.css';
import { supabase } from './../client';

export default function SendMessage() {
   const [value, setValue] = useState('')
   const [loading, setLoading] = useState(false)
   const Input = useRef(null)

   async function sendMessage(e) {
      e.preventDefault()
      Input.current.focus()

      if (value !== '') {
         setLoading(true)
         setValue('')
         const { data, error } = await supabase.from('messages').insert({ message: value })
         setLoading(false)
      }
   }

   return (
      <form className='form'>
         <input
            ref={Input}
            className='form__input'
            type="text"
            placeholder='Введите ваше сообщение...'
            value={value} onChange={(e) => setValue(e.target.value)} />


         <button type='submit' className='form__btn' onClick={sendMessage}>
            {loading ? <img style={{ width: '60px' }} src="https://acegif.com/wp-content/uploads/loading-100.gif" alt="" /> : 'Отправить'}
         </button>
      </form>
   )
}