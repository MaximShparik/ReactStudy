import React from 'react';
import '../.././App.css';
import {reduxForm,Field} from 'redux-form'
import {Input} from '../common/formsControler/FormsControler'
import {requiredField} from '../../utilits/validators/validators'
import {connect} from 'react-redux'
import {LoginHOC} from '../../redux/auth-reducer'
import {Redirect} from 'react-router-dom'

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>

      {props.captchaUrl && <img src={props.captchaUrl}/>}
      {props.captchaUrl && <Field placeholder=''
                            name='captcha'
                            component={Input}
                            validate={[requiredField]}
                            />}

        <div>
          <Field placeholder='Email'
            name='email'
            component={Input}
            validate={[requiredField]}
          />
        </div>
        <div>
          <Field placeholder='Password'
            name='password'
            component={Input}
            validate={[requiredField]}
          />
        </div>
        <div className='remember'>
          <Field component={Input}
            name='rememberMe'
            type='checkbox'

            // validate={[requiredField]}
          /> remember me
        </div>

        {props.error && <div className='form-login-error'>{props.error}</div>}

        <div>
          <button>LogIn</button>
        </div>
      </form>
  )
}
// {props.error && <div className='form-login-error'>{props.error}</div>}
// это значит если в пропсах прихлдит ерор
// покажи этот див


const ReduxLoginForm = reduxForm({
  form:'login'
})(LoginForm)
// это название формы
// оно нужно будет для stopSubmit

const Login =(props)=>{

  const onSubmit=(formData)=>{
    props.LoginHOC(formData.email,formData.password,formData.rememberMe,formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to='/profile'/>
  }

  return(
    <div className='login'>
      <h1>LogIn</h1>
      <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  )
}

const mapStateToProps=(state)=>({
  isAuth: state.Auth.isAuth,
  captchaUrl: state.Auth.captchaUrl
})

export default connect(mapStateToProps,{LoginHOC})(Login)
