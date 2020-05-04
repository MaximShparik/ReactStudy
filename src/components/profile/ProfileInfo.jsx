import React,{useState,useEffect} from 'react';
import '../.././App.css';
import Preloader from '../common/preloader/Preloader'
import ProfileStatusHook from './ProfileStatusHook'
import Ava from '../../img/ava.jpg'
import ProfileInfoDataForm from './ProfileInfoDataForm'

const ProfileInfo = (props) => {

  let [editMode,setEditMode] = useState(false)
  // урок 84, useState возвращает массив из знвчения и функции
  // мы присваеваем editMode значение
  // а setEditMode функцию которая меняет первое значение
  let [profile,setProfile] = useState(props.status)

  useEffect(()=>{
    setProfile(props.profile)
  },[props.profile])

  const activateEditMode=()=>{
    setEditMode(true)
  }

  const deactivateEditMode=()=>{
    setEditMode(false)
  }

// если профайл undefined или null
  if (!props.profile){
    return <Preloader/>
  }
  const onMainPhotoSelected=(e)=>{
      props.savePhoto(e.target.files[0])
  }

  const onSubmit=(formData)=>{
    props.SaveProfile(formData)
    // console.log(formData)
  }

  return (
    <div>
      <div className='content__bg'></div>
      <div className='content__profile'>
        <img src={props.profile.photos.large||Ava} alt="ava" className='content__profile-ava'></img>
        {props.isOwner&&<input type='file' onChange={onMainPhotoSelected}/>}
        <ProfileStatusHook status={props.status}
          UpdateUserStatus={props.UpdateUserStatus}/>
        {editMode
          ?<ProfileInfoDataForm profile={props.profile} onSubmit={onSubmit}/>
          :<ProfileInfoData
            profile={props.profile}
            isOwner={props.isOwner}
            goToEditMode={()=>{activateEditMode()}}
            />}
      </div>
    </div>
  )
}

const ProfileInfoData =(props)=>{
  return(
    <div className='content__profile-info'>
      <p className='info-name'>{props.profile.fullName}</p>
      <p>Looking for a job: {props.profile.lookingForAJob?'Yes':'No'}</p>
      { props.profile.lookingForAJob &&
        <p>My professional skills: {props.profile.lookingForAJobDescription}</p>
      }
      <p>About me: {props.profile.aboutMe}</p>
      <p>Contacts: {Object.keys(props.profile.contacts).map(key=>{
        return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
      })}</p>
      {props.isOwner&&<button onClick={props.goToEditMode}>Edit Info</button>}
    </div>
  )
}


// 24 минута 97 выпуск
// написали на кнопке сейф и я устал

export const Contacts = ({contactTitle, contactValue}) => {

  return(
    <div>
      { contactValue &&
        <p>{contactTitle}: {contactValue}</p>
      }
    </div>
  )
}

export default ProfileInfo;
