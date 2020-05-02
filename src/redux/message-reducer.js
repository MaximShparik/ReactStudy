// const UPDATE_NEW_MESSAGE_AREA = 'UPDATE-NEW-MESSAGE-AREA'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialData = {
  dataMessage:[
    {from:'me', text:'Hi', class:'me', avasrc:'ava.jpg'},
    {from:'not_me', text:'Hi))', avasrc:'ava.jpg'},
    {from:'me', text:'How do you do?', class:'me', avasrc:'ava.jpg'},
    {from:'not_me', text:'How do you do?', avasrc:'ava.jpg'},
    {from:'me', text:'Cool', class:'me', avasrc:'ava.jpg'},
    {from:'not_me', text:'Cool)))', avasrc:'ava.jpg'}
  ],
  dataDialogsName:[
    {id:1, name:'Maxim'},
    {id:2, name:'Stas'}
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
    // case UPDATE_NEW_MESSAGE_AREA:
    //   return {
    //     ...state,
    //     MyMessageText: action.newText
    //   };
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
// export const UpdateNewMessageArea = (text) => {
//     return { type:UPDATE_NEW_MESSAGE_AREA, newText: text }
// }

export default messageReducer;
