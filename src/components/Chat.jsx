import './../App.css';
import Messages from './Messages';
import SendMessage from './SendMessage';

export default function Chat() {
   return (
      <div className='Chat'>
         <Messages />
         <SendMessage />
      </div>
   )
}