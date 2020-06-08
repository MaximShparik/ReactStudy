import {GetFriends} from '../api/api'
import {ToggleIsFetching} from './users-reducer'

const SET_FRIENDS = 'SET-FRIENDS'

let initialState = {
  dataUsers:[],
  isFetching: false
};

const friendsReducer=(state=initialState,action)=> {
  switch(action.type) {
    case SET_FRIENDS:{
      return {...state,dataUsers:action.users}
    }
    default:
      return state;
  }
}

export const SetFriends = (users) => {
  return {type: SET_FRIENDS,users: users}
}

export const GetFriendsThunkCreator = ()=>{

  return (dispatch)=>{
    dispatch(ToggleIsFetching(true))
    GetFriends().then(response=>{
      dispatch(ToggleIsFetching(false))
      dispatch(SetFriends(response.items))
      // debugger
    })
  }
}


export default friendsReducer;
