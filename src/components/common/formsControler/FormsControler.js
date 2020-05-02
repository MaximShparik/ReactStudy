import React from 'react';
import '../../../App.css';

export const Textarea = ({input,meta,...props}) =>{
//мы деструктеризируем пропсы чтобы передать
// то что нужно для работы тексэрии
// деструктуризация и рестоператор-эти темы
const hasError = meta.touched&&meta.error

  return (
    <div className={(hasError?'form-error':'')}>
      <textarea {...input} {...props}/>
      {hasError&&<p className='form-control-text'>{meta.error}</p>}
    </div>
  )
}
// если мы из мета пришли данные что
// мы ронули форму и
// если в мета пришол ерор из валидатора
// покажи спан и присвой класс


export const Input = ({input,meta,...props}) =>{

const hasError = meta.touched&&meta.error

  return (
    <div className={(hasError?'form-error':'')}>
      <input {...input} {...props}/>
      {hasError&&<p className='form-control-text'>{meta.error}</p>}
    </div>
  )
}
