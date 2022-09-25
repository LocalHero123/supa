import { useEffect, useRef, useState } from 'react';
import { useRealtime } from 'react-supabase';
import './../App.css';
import Loader from './Loader';

export default function Messages() {
   const ScrollToBottom = useRef(null)
   const [{ data: messages, error, fetching }, reexecute] = useRealtime('messages')

   useEffect(() => {
      ScrollToBottom.current.scrollIntoView({ behaivor: 'smooth' })
   })

   return (
      <div className="container">
         <div className="messages-area">
            {fetching && <Loader />}
            {messages && messages.map(i =>
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
               </div>)}
         </div>

         <div style={{ opacity: '0' }} ref={ScrollToBottom}>ScrollToBottom</div>
      </div>
   )
}