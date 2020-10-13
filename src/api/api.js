import * as axios from 'axios'

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
      "API-KEY":"8f499ddb-6d41-430a-beb0-5377e3ad6d7e"
    },
})


export const GetUsers =(currentPage,pageSize)=>{
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response=>response.data)
}

export const GetFriends =()=>{
  return instance.get(`users?count=100`)
    .then(response=>response.data)
}

export const UnFollowUser =(id)=>{
  return instance.delete(`follow/${id}`)
    .then(response=>response.data)
}

export const FollowUser =(id)=>{
  return instance.post(`follow/${id}`,{})
  .then(response=>response.data)
}

export const GetProfile =(id)=>{
  return instance.get(`profile/` + id)
}

export const Auth =()=>{
  return instance.get(`auth/me`)
}

export const GetStatus =(id)=>{
  return instance.get(`profile/status/ `+id)
}

export const UpdateStatus =(status)=>{
  return instance.put(`profile/status`,{
    status:status
  })
}

export const Login =(email, password, rememberMe, captcha=null)=>{
  return instance.post(`auth/login`,{
    email:email,
    password:password,
    rememberMe:false,
    captcha:captcha
  })
}

export const Logout =()=>{
  return instance.delete(`auth/login`)
}

export const savePhotoApi=(photoFile)=>{
  const formData=new FormData()
  formData.append('image', photoFile)
  return instance.put(`profile/photo`,formData, {
    headers:{
      'Content-Type':'multipart/form-data'
    }
  })
}
export const SaveProfileApi =(profile)=>{
  return instance.put(`profile`,profile)
}

export const SecurityApi =()=>{
  return instance.get(`security/get-captcha-url`)
}

export const StartChattingApi =(userId)=>{
  return instance.put(`dialogs/${userId}`)
}

export const GetMessagesApi =(userId)=>{
  return instance.get(`dialogs/${userId}/messages`)
}

export const SendMessageApi =(userId,body)=>{
  return instance.post(`dialogs/${userId}/messages`,{
    body:body
  })
}
