import React from 'react';
import Contacts from './ProfileInfo'
import {reduxForm,Field} from 'redux-form'
import {Input,Textarea} from '../common/formsControler/FormsControler'
import {requiredField} from '../../utilits/validators/validators'

const ProfileInfoDataForm =(props)=>{

  return(
    <form onSubmit={props.handleSubmit} className='about-me'>

      <p className='info-name-form'>Назови себя:
        <Field placeholder='Name'
          name='fullName'
          component={Input}
          validate={[requiredField]}
        />
      </p>

      <p className='looking'>Ищу ли я работу:
        <Field component={Input}
          name='lookingForAJob'
          type='checkbox'/>
      </p>

      <p>Твои професионнальный навыки:
        <Field placeholder='Your skills'
          name='lookingForAJobDescription'
          component={Textarea}
        />
      </p>

      <p>Расскажи о себе:
        <Field placeholder='What do you think about yourself'
          name='aboutMe'
          component={Textarea}
        />
      </p>
      <p className='contacts'>{Object.keys(props.profile.contacts).map(key=>{
        return <div key={key} className='contact__item'>
        <p>{key}:<Field component={Input}
          name={'contacts.'+key}/></p>
        </div>
      })}</p>

      {props.error && <div className='form-login-error'>{props.error}</div>}

      <button>Save</button>
    </form>
  )
}



const ReduxProfileInfoDataForm = reduxForm({
  form:'info'
})(ProfileInfoDataForm)

export default ReduxProfileInfoDataForm;
