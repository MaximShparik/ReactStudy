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

export const Login =(email, password, rememberMe)=>{
  return instance.post(`auth/login`,{
    email:email,
    password:password,
    rememberMe:false
  })
}

export const Logout =()=>{
  return instance.delete(`auth/login`)
}
