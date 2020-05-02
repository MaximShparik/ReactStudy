import React from 'react';
import '../../.././App.css';

const Message = (props) => {

  return (
    <div className={'message '+ props.class}>
      <div className='message__person'>
        <img src={props.avasrc} alt="ava" className='message__ava'/>
        <span className='message__name'>{props.from}</span>
      </div>
      <div className='message__area'>
        <p className='message__text'>{props.text}</p>
      </div>
    </div>
  );
}

export default Message;
