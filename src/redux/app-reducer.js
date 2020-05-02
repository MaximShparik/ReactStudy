import {GetUserData} from '../redux/auth-reducer'



const SET_INITIALIZED = 'SET-INITIALIZED'

let initialState = {
  initialized:false
}


const appReducer=(state=initialState,action)=> {
  switch(action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}

export const InitializedSuccess = () => {
  return {
    type: SET_INITIALIZED
  }
}

export const InitializeApp = () => (dispatch) => {
  // dispatch(GetUserData())
  let promise = dispatch(GetUserData())
  // Дожидаемся ответа от функции
  // потому что в GetUserData написали ретурн
  promise.then(()=>{
    dispatch(InitializedSuccess())
  })
}



export default appReducer;
