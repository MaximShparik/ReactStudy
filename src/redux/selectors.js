import {createSelector} from 'reselect'

export const getUsers =(state)=>{
  return state.Users.dataUsers
}

export const pageSize =(state)=>{
  return state.Users.pageSize
}

// export const dataUsersSelector = (state)=>{
//   return dataUsers(state).filter(u=>true)
// }

export const dataUsersSuperSelector = createSelector(getUsers,pageSize,
  (dataUsers, pageSize)=>{
    return dataUsers.filter(u=>true)
})
// эта функция создана с бибилиотекой реселектом для того чтобы
// не запускать сложную логику которая может лежать в этих функциях
// она будет запускаться только после определения
// есть ли разница в требуемом от неё ответе
// данные для сравнения она берёт из более простого селекора
// dataUser
// вообщем она вызывается только если входные данные меняются
// если не меняются следовательно ответ функции тоже не будет меняться
// выпуск 83
// селектор может зависить от многих селекторов
// getUsers,pageSize, описание от чего зависит большой селетор
