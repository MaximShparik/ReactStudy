import React from 'react';
import '../.././App.css';

const PostOld = (props) => {

  return (
      <div className='post__old'>
        <img src="ava.jpg" alt="ava" className='post__old-ava'></img>
        <p className='post__old-title'>{props.message}</p>
      </div>
  );
}

export default PostOld;
