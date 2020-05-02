import React from 'react';
import profileReducer,{AddPost} from './profile-reducer'

test('что-то тестим', () => {
  let action = AddPost('work')
  let initialState = {
    dataPostOld:[
      {id:1, message:'Maxim'},
      {id:2, message:'Stas'},
      {id:3, message:'Kirill'},
      {id:4, message:'Vanya'},
      {id:5, message:'Scot'},
      {id:6, message:'Tom'}
    ]}
  let newState = profileReducer(initialState,action)
  expect(newState.dataPostOld.length).toBe(7)
});
