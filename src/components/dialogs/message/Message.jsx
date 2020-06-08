import React from 'react';
import '../../.././App.css';
import Ava from '../../../img/ava.jpg'

const Message = (props) => {

  return (
    <div className={'message '+ props.class}>
      <div className='message__person'>
        <img src={Ava} alt="ava" className='message__ava'/>
        <span className='message__name'>{props.from}</span>
      </div>
      <div className='message__area'>
        <p className='message__text'>{props.text}</p>
      </div>
    </div>
  );
}

export default Message;
