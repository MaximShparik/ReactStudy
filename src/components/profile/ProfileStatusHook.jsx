import React,{useState,useEffect} from 'react';
import '../.././App.css';

const ProfileStatusHook =(props)=> {

  let [editMode,setEditMode] = useState(false)
  // урок 84, useState возвращает массив из знвчения и функции
  // мы присваеваем editMode значение
  // а setEditMode функцию которая меняет первое значение
  let [status,setStatus] = useState(props.status)

  useEffect(()=>{
    setStatus(props.status)
  },[props.status])
  // useEffect этот хук запускается когда компонента уже вмонтирована
  // и он зависит от того что указанно вторым элементом
  // это нужно чтобы отрисовка не сбоила


  const activateEditMode=()=>{
    setEditMode(true)
  }

  const deactivateEditMode=()=>{
    setEditMode(false)
    props.UpdateUserStatus(status)
  }

  const onStatusChange=(e)=>{
    setStatus(e.currentTarget.value)
  }

  return (
      <div className='status'>
        {!editMode&&

            <span onDoubleClick={activateEditMode}>{props.status||'---'}</span>

        }
        {editMode&&

            <input onChange={onStatusChange}
              onBlur={deactivateEditMode}
              autoFocus={true}
              value={status}
              maxlength="100"
              className='status-input'>
              </input>

        }
      </div>
  )
}

export default ProfileStatusHook;
