import {GetProfile,GetStatus,UpdateStatus,savePhotoApi,SaveProfileApi} from '../api/api'


const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const SET_PHOTO_SUCCESS = 'SET-PHOTO-SUCCESS'
const SET_USER_PROFILE_INFO = 'SET-USER-PROFILE-INFO'
// const UPDATE_STATUS ='UPDATE-STATUS'
//
const SET_USER_ID = 'SET-USER-ID'
//
let initialState = {
  dataPostOld:[
    {id:1, message:'Maxim'},
    {id:2, message:'Stas'},
    {id:3, message:'Kirill'},
    {id:4, message:'Vanya'},
    {id:5, message:'Scot'},
    {id:6, message:'Tom'}
  ],
  profile: null,
  status: '',
  // id: 2
};
// начальные данные чтобы редакс мог запустить и отрендерить начальное состояние

const profileReducer=(state=initialState,action)=> {
  switch(action.type) {
    case ADD_POST:
      let NewOldPost = {
        id: 5,
        message: action.MyPostText,
      };
      return {
        ...state,
        dataPostOld: [...state.dataPostOld,NewOldPost],
        dataNewPostText:''
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case SET_USER_PROFILE_INFO:
      return {
        ...state,
        profile: {...state.profile,
          aboutMe:action.profile.aboutMe,
          lookingForAJob:action.profile.lookingForAJob,
          lookingForAJobDescription:action.profile.lookingForAJobDescription,
          fullName:action.profile.fullName,}
      }
    // case UPDATE_STATUS:
    //   return {
    //     ...state,
    //     status: action.status
    //   }
    //
    case SET_USER_ID:
      return {
        ...state,
        id: action.id
      }
    case SET_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos:action.photos}
      }
      // debugger
    //
    default:
      return state;
  }
}

export const AddPost = (MyPostText) => {
  return {
    type: ADD_POST,
    MyPostText:MyPostText
  }
}

export const SetUsersProfile = (profile) => {
  return { type:SET_USER_PROFILE, profile: profile }
}
export const SetStatus = (status) => {
  return { type:SET_STATUS, status: status }
}
export const SetPhotoSuccess = (photos) => {
  return { type:SET_PHOTO_SUCCESS, photos: photos }
}
export const SetUsersProfileInfo = (profile) => {
  return { type:SET_USER_PROFILE_INFO, profile: profile }
}
// export const UpdateStatus = (status) => {
//   return { type:UPDATE_STATUS, status: status }
// }

export const GetUserStatus = (id) => async (dispatch)=> {
  let response = await GetStatus(id)
      dispatch(SetStatus(response.data))
}
export const UpdateUserStatus = (status) =>(dispatch)=> {
  UpdateStatus(status).then(response=>{
    if(response.data.resultCode===0){
      dispatch(SetStatus(status))
    }
  });
}

export const savePhoto = (file) =>(dispatch)=> {
  savePhotoApi(file).then(response=>{
    if(response.data.resultCode===0){
      dispatch(SetPhotoSuccess(response.data.data.photos))
    }
  });
}
export const GetUsersProfile = (id) =>(dispatch)=> {
  GetProfile(id).then(response=>{
      dispatch(SetUsersProfile(response.data))
  });
}

export const SaveProfile = (profile) => (dispatch) => {
  SaveProfileApi(profile).then(response=>{

    if(response.data.resultCode===0){
       dispatch(SetUsersProfileInfo(profile))
    }
  });
}



// не юзаная ((((
export const SetUsersId = (id) => {
  return { type:SET_USER_ID, id: id }
}
//

export default profileReducer;
