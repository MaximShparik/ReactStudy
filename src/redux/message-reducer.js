import {GetMessagesApi,SendMessageApi} from '../api/api'
// const UPDATE_NEW_MESSAGE_AREA = 'UPDATE-NEW-MESSAGE-AREA'
const ADD_MESSAGE = 'ADD-MESSAGE'
const SET_MESSAGE = 'SET-MESSAGE'
const TOGGLE_IS_FETCHING ='TOGGLE-IS-FETCHING'
const SENDING ='SENDING'

let initialData = {
  dataMessage:[],
  isFetching: false,
  isSending: false,
  dataDialogsName:[
    {id:7099, name:'7099'},
  ]
};
// начальные данные чтобы редакс мог запустить и отрендерить начальное состояние

const messageReducer=(state=initialData,action)=> {
  switch(action.type) {
    case ADD_MESSAGE:
    let MyNewMessage = {
      from:action.MyMessageText.senderName,
      text:action.MyMessageText.body,
      class:'me'
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
    case SENDING:{
      return{...state, isSending: action.isSending}
    }
    default:
    return state;
  }
}

export const AddMessage = (MyMessageText) => {
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
export const Sending = (isSending) => {
  return {type: SENDING, isSending: isSending}
}

export const GetMessagesInitial = (id)=>{
  return (dispatch)=>{
    dispatch(ToggleIsFetching(true))
    GetMessagesApi(id).then(response=>{
      dispatch(ToggleIsFetching(false))
      dispatch(SetMessages(response.data.items))
    })
  }
}

export const GetMessagesThunkCreator = (id)=>{
  return (dispatch)=>{
    GetMessagesApi(id).then(response=>{
      dispatch(SetMessages(response.data.items))
      dispatch(Sending(false))
    })
  }
}

export const SendMessageThunkCreator = (userId,body)=>{
  return (dispatch)=>{
    dispatch(Sending(true))
    AddMessage(body)
    SendMessageApi(userId,body).then(response=>{
      dispatch(GetMessagesThunkCreator(response.data.data.message.recipientId))
    })
  }
}


export default messageReducer;
