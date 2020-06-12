import React from 'react';
import '../.././App.css';
import Ava from '../../img/ava.jpg'

const PostOld = (props) => {
  // debugger
  if(props.photo==null||props.photo.photos.small==null){
    var photo = Ava
  } else{
    var photo = props.photo.photos.small
  }

  return (
      <div className='post__old'>
        <img src={photo} alt="ava" className='post__old-ava'></img>
        <p className='post__old-title'>{props.message}</p>
      </div>
  );
}

export default PostOld;
