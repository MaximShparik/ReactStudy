import React from 'react';
import '../.././App.css';
import Ava from '../../img/ava.jpg'

const PostOld = (props) => {

  return (
      <div className='post__old'>
        <img src={Ava} alt="ava" className='post__old-ava'></img>
        <p className='post__old-title'>{props.message}</p>
      </div>
  );
}

export default PostOld;
