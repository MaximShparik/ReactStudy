import CurrentDialog from './CurrentDialog'
import {SendMessage} from '../../.././redux/message-reducer';
import {connect} from 'react-redux';
import {compose} from 'redux'
import {WithAuthRedirect} from '../../../hoc/WithAuthRedirect'

let mapStateToProps =(state)=>{
  return {
    dataNewMessageText: state.Message.dataNewMessageText,
    dataMessage: state.Message.dataMessage,
    dataDialogsName:state.Message.dataDialogsName,
  }
}

let mapDispatchToProps = (dispatch)=>{
  return{
    SendMessage:(MyMessageText)=>{
      dispatch(SendMessage(MyMessageText))
    }
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  WithAuthRedirect
)(CurrentDialog)

// компосе автоатисеки вызовет первую снизу функцию
// и передаст в неё карентдиалог
// затем результат первой снизу закинет во вторую снизу
