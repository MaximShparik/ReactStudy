import React from 'react';
import './App.css';
import HeaderContainer from './components/header/Header-Container'
import Nav from './components/Nav/Nav'
import UsersContainer from './components/users/Users-Container'
import {HashRouter, Route} from 'react-router-dom'
import Login from './components/login/login'
import {InitializeApp} from './redux/app-reducer'
import {connect} from 'react-redux';
import Preloader from './components/common/preloader/Preloader'
import SuspenseHOC from './hoc/WithSuspense'

const CurrentDialogContainer = React.lazy(() => import('./components/dialogs/message/CurrentDialog-Container'));
const ProfileContainer = React.lazy(() => import('./components/profile/Profile-Container'));

class App extends React.Component {

  componentDidMount(){
    this.props.InitializeApp()
  }

  render(){

    if(!this.props.initialized){
      return <Preloader/>
    }
    return (
      <HashRouter>
        <div className='app-wrapper'>
          <HeaderContainer/>
          <Nav/>
          <Route path='/profile/:userId?'
            render={SuspenseHOC(ProfileContainer)}
          />
          <Route path='/dialogs'
            render={SuspenseHOC(CurrentDialogContainer)}
          />
          <Route path='/users'
            render={ () => <UsersContainer/>}
          />
          <Route path='/login'
            render={ () => <Login/>}
          />
        </div>
      </HashRouter>
    );
  }
}
// <Nav store={props.store}/>
// чтобы отрисовывать вкладку друзей
// потом нужно будет сделать контейнерную для нав


let mapStateToProps=(state)=>({
    initialized:state.App.initialized
})


export default connect(mapStateToProps,{InitializeApp})(App)

// export default compose(
//   connect(mapStateToProps,{GetUserData}),
//   withRouter
// )(App)

// он добавлял withRouter в 80 выпуске
// хз зачем, у меня и без него работало
