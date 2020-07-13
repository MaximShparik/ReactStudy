import React from 'react';
import '../../.././App.css';
import Ava from '../../../img/ava.jpg'

const Message = (props) => {
// debugger


  return (
    <div className={props.from==8775 ? 'message me' : 'message no_me'}>
      <div className='message__person'>
        <img src={Ava} alt="ava" className='message__ava'/>
        <span className='message__name'>{props.from}</span>
      </div>
      <div className='message__area'>
        {props.text}
      </div>
    </div>
  );
}

export default Message;
