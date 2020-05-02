import {Auth,Login,Logout} from '../api/api'
import {stopSubmit} from 'redux-form'


const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}


const authReducer=(state=initialState,action)=> {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      // данные пришедшие из action с сервера
      //  перезатрут данные из state
      }
    default:
      return state;
  }
}

export const SetUserData = (data) => {
  return {
    type: SET_USER_DATA,
    data: data
  }
}

export const GetUserData = () => async (dispatch) => {
  let response = await Auth()
        if(response.data.resultCode ===0){
          dispatch(SetUserData(response.data.data))
        }
}
// можно использовать await
// можно then
// так-то пофиг, но как варик

export const LoginHOC = (email, password, rememberMe) => (dispatch) => {
  Login(email, password, rememberMe).then(response=>{
        if(response.data.resultCode ===0){
          dispatch(GetUserData())
        } else {
          let message = response.data.messages.length>0 ? response.data.messages[0] :'Something is wrong'
          let action = stopSubmit('login',{_error:message})
          dispatch(action)
        }
  });
}
// stopSubmit это функия из redux-form
// которая помогает обробатывать ошибки
// должны передать в него название формы
// которую должны остановить


export const LogoutHOC = () => (dispatch) => {
  Logout().then(response=>{
        if(response.data.resultCode ===0){
          dispatch(SetUserData(null))
          window.location.reload()
        }
  });
}


export default authReducer;
