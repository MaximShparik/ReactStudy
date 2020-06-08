import {combineReducers,createStore,applyMiddleware} from 'redux'
import profileReducer from './profile-reducer'
import messageReducer from './message-reducer'
import navbarReducer from './navbar-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import appReducer from './app-reducer'
import friendsReducer from './friends-reducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
  Profile:profileReducer,
  Message:messageReducer,
  Friends:friendsReducer,
  Users:usersReducer,
  Navbar:navbarReducer,
  Auth:authReducer,
  App:appReducer,
  form:formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
