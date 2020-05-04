import React from 'react';
import '../.././App.css';
import Preloader from '../common/preloader/Preloader'
import ProfileStatusHook from './ProfileStatusHook'
import Ava from '../../img/ava.jpg'

const ProfileInfo = (props) => {

// если профайл undefined или null
  if (!props.profile){
    return <Preloader/>
  }
  const onMainPhotoSelected=(e)=>{
    if(e.target.files.lenght){
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div className='content__bg'></div>
      <div className='content__profile'>
        <img src={props.profile.photos.large||Ava} alt="ava" className='content__profile-ava'></img>
        {props.isOwner&&<input type='file' onChange={onMainPhotoSelected}/>}
        <div className='content__profile-info'>
          <p className='info-name'>{props.profile.fullName}</p>
          <p className='info-day'>Date of Birth: 16 september</p>
          <p className='info-city'>City: Moscow</p>
          <p className='info-edu'>Education: Mirea</p>
          <p className='info-site'>Web Site: LookUp</p>
          <ProfileStatusHook status={props.status}
            UpdateUserStatus={props.UpdateUserStatus}/>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
