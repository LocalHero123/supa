import { useEffect, useState } from 'react';
import { useRealtime } from 'react-supabase';
import './../App.css';
import { supabase } from './../client';
import Loader from './Loader';

export default function Chat() {
   const [value, setValue] = useState('')
   const [mess, setMess] = useState([])

   // const [{ data: messages, error, fetching }, reexecute] = useRealtime('messages')

   useEffect(() => {
      getMessages()
   }, [])


   const messages = supabase
      .from('messages')
      .on('*', payload => {
         console.log('Change received!1', payload)
      })
      .subscribe()


   async function getMessages() {
      let { data, error } = await supabase.from('messages').select('*')
      setMess(data)
   }

   async function createMessage(e) {
      e.preventDefault()
      if (value !== '') {
         const { data, error } = await supabase.from('messages').insert({ message: value })
         setValue('')
         getMessages()

         const messages = supabase
            .from('messages')
            .on('*', payload => {
               console.log('Change received!', payload)
            })
            .subscribe()
      }
   }


   return (
      <div className='Chat'>
         <div className="container">
            <div className="messages-area">
               {/* {fetching && <Loader />} */}
               {mess && mess.map(i =>
                  <div className='message' key={i.id}>
                     <img className='message__photo' src='https://sun2.6789.userapi.com/s/v1/ig2/ko_i9YzeASmx2JlChnicHp52BzfOgcdO1n_5PRtp3zkczstejwAH22A59kykmzObREbf58sd81es-gy5O3hzN6su.jpg?size=50x50&quality=96&crop=0,2,402,402&ava=1' alt="Ава" />

                     <div className='message__body'>
                        <span className="message__name">LocalHero</span>

                        <span className='date'>
                           <span className="date__time">
                              {Number(i.date.substr(11, 2)) + 3 + i.date.substr(13, 3)}
                           </span>

                           <span className="date__day">{i.date.substr(0, 10)}</span>
                        </span>

                        <div className="message__text">{i.message}</div>
                     </div>
                  </div>
               )}
            </div>
         </div>

         <form className='form'>
            <input
               className='form__input'
               type="text"
               placeholder='Введите ваше сообщение...'
               value={value} onChange={(e) => setValue(e.target.value)} />

            <button type='submit' className='form__btn' onClick={createMessage}>Отправить</button>
         </form>
      </div>
   )
}