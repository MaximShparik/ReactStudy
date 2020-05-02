import {GetUsers,FollowUser,UnFollowUser} from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT ='SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING ='TOGGLE-IS-FETCHING'
const FOLLOWING_IN_PROCCES = 'FOLLOWING-IN-PROCCES'

let initialState = {
  dataUsers:[],
  pageSize: 10,
  totalUsersCount:0,
  currentPage: 1,
  isFetching: false,
  followingInProcces: []
};

const usersReducer=(state=initialState,action)=> {
  switch(action.type) {
    case FOLLOW:
      return {
        ...state,
        dataUsers: state.dataUsers.map(u=>{
          if (u.id === action.userId){
            return{...u, followed:true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        dataUsers: state.dataUsers.map(u=>{
          if (u.id === action.userId){
            return{...u, followed:false}
          }
          return u;
        })
      }
    case SET_USERS:{
      return{...state, dataUsers:action.users}
    }// в users мы закидываем данные пришедшие из action
    case SET_CURRENT_PAGE:{
      return{...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USERS_COUNT:{
      return{...state, totalUsersCount: action.totalCount}
    }
    case TOGGLE_IS_FETCHING:{
      return{...state, isFetching: action.isFetching}
    }
    case FOLLOWING_IN_PROCCES:{
      return{...state,
        followingInProcces: action.isFetching
          ?[...state.followingInProcces, action.id]
          :state.followingInProcces.filter(id=>id!==action.id)
        }
    }
    default:
      return state;
  }
}

export const Follow = (userId) => {
  return {type: FOLLOW,userId: userId}
}
export const UnFollow = (userId) => {
  return {type: UNFOLLOW, userId: userId}
}
export const SetUsers = (users) => {
  return {type: SET_USERS, users: users}
}
export const SetCurrentPage = (currentPage) => {
  return {type: SET_CURRENT_PAGE, currentPage: currentPage}
}
export const SetTotalUsersCount = (totalCount) => {
  return {type: SET_TOTAL_USERS_COUNT, totalCount: totalCount}
}
export const ToggleIsFetching = (isFetching) => {
  return {type: TOGGLE_IS_FETCHING, isFetching: isFetching}
}
export const FollowingInProcces = (isFetching,id) => {
  return {type: FOLLOWING_IN_PROCCES, isFetching,id}
}

export const GetUsersThunkCreator = (currentPage,pageSize)=>{

  return (dispatch)=>{

    dispatch(ToggleIsFetching(true))

    GetUsers(currentPage,pageSize).then(response=>{
        dispatch(ToggleIsFetching(false))
        dispatch(SetUsers(response.items))
        dispatch(SetCurrentPage(currentPage))
        dispatch(SetTotalUsersCount(response.totalCount))
      })
    }
}

export const FollowThunkCreator = (id)=>{

  return (dispatch)=>{

    dispatch(FollowingInProcces(true,id))
    FollowUser(id).then(response=>{
        if (response.resultCode===0){
            dispatch(Follow(id))
        }
        dispatch(FollowingInProcces(false,id))
    })
  }
}

export const UnFollowThunkCreator = (id)=>{

  return (dispatch)=>{

    dispatch(FollowingInProcces(true,id))
    UnFollowUser(id).then(response=>{
        if (response.resultCode===0){
            dispatch(UnFollow(id))
        }
        dispatch(FollowingInProcces(false,id))
    })
  }
}

export default usersReducer;
