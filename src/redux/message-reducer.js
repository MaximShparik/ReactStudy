import {GetMessagesApi} from '../api/api'
// const UPDATE_NEW_MESSAGE_AREA = 'UPDATE-NEW-MESSAGE-AREA'
const ADD_MESSAGE = 'ADD-MESSAGE'
const SET_MESSAGE = 'SET-MESSAGE'
const TOGGLE_IS_FETCHING ='TOGGLE-IS-FETCHING'

let initialData = {
  dataMessage:[],
  isFetching: false,
  dataDialogsName:[
    {id:8775, name:'8775'},
  ],
  // dataNewMessageText:'',
};
// начальные данные чтобы редакс мог запустить и отрендерить начальное состояние

const messageReducer=(state=initialData,action)=> {
  switch(action.type) {
    case ADD_MESSAGE:
    let MyNewMessage = {
      from:'me',
      text:action.MyMessageText,
      class:'me',
      avasrc:'ava.jpg'
    }
    return {
      ...state,
      dataMessage: [...state.dataMessage, MyNewMessage],
      // dataNewMessageText: ''
    };
    case SET_MESSAGE:
    return {
      ...state,
      dataMessage: action.dataMessage
    };
    case TOGGLE_IS_FETCHING:{
      return{...state, isFetching: action.isFetching}
    }
    default:
    return state;
  }
}

export const SendMessage = (MyMessageText) => {
  return {
    type: ADD_MESSAGE,
    MyMessageText:MyMessageText
  }
}

export const SetMessages = (dataMessage) => {
  return {
    type: SET_MESSAGE,
    dataMessage: dataMessage
  }
}
export const ToggleIsFetching = (isFetching) => {
  return {type: TOGGLE_IS_FETCHING, isFetching: isFetching}
}

// export const GetMessages = (id) => {
//   return {
//     type: GET_MESSAGES,
//     MyMessageText:MyMessageText
//   }
// }
export const GetMessages = (id) => async (dispatch)=> {
  let response = await GetMessagesApi(id)
  dispatch(SetMessages(response.data))
}

export const GetMessagesThunkCreator = (id)=>{

  return (dispatch)=>{

    dispatch(ToggleIsFetching(true))

    GetMessagesApi(id).then(response=>{
      dispatch(ToggleIsFetching(false))
      dispatch(SetMessages(response.data.items))
      // dispatch(SetCurrentPage(currentPage))
      // dispatch(SetTotalUsersCount(response.totalCount))
    })
  }
}

// export const UpdateNewMessageArea = (text) => {
//     return { type:UPDATE_NEW_MESSAGE_AREA, newText: text }
// }

export default messageReducer;
