import React from 'react';
import Contacts from './ProfileInfo'
import {reduxForm,Field} from 'redux-form'
import {Input} from '../common/formsControler/FormsControler'
import {requiredField} from '../../utilits/validators/validators'

const ProfileInfoDataForm =(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>

      <p className='info-name'>
        <Field placeholder='Name'
          name='fullName'
          component={Input}
          validate={[requiredField]}
        />
      </p>

      <p>Looking for a job:
        <Field component={Input}
          name='lookingForAJob'
          type='checkbox'/>
      </p>

      <p>My professional skills:
        <Field placeholder='Your skills'
          name='lookingForAJobDescription'
          component={Input}
        />
      </p>

      <p>About me:
        <Field placeholder='What do you think about yourself'
          name='aboutMe'
          component={Input}
        />
      </p>

      /*<p>Contacts: {Object.keys(props.profile.contacts).map(key=>{
        return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
      })}</p>*/
      <button>Save</button>
    </form>
  )
}

const ReduxProfileInfoDataForm = reduxForm({
  form:'info'
})(ProfileInfoDataForm)

export default ReduxProfileInfoDataForm;
