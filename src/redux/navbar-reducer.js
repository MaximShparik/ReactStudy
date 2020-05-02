let initialData = {
  dataBestFriends:[
    {name:'Adolf', avasrc:'ava.jpg'},
    {name:'Max', avasrc:'ava.jpg'},
    {name:'Roma', avasrc:'ava.jpg'},
    {name:'Adolf', avasrc:'ava.jpg'},
    {name:'Max', avasrc:'ava.jpg'},
    {name:'Roma', avasrc:'ava.jpg'}
  ]
};
// начальные данные чтобы редакс мог запустить и отрендерить начальное состояние

export const navbarReducer=(state=initialData,action)=> {

  return state;
}

export default navbarReducer;
