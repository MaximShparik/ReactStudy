import React from 'react';
import CurrentDialog from './CurrentDialog'
import {AddMessage,GetMessagesThunkCreator,GetMessagesInitial,SendMessageThunkCreator} from '../../.././redux/message-reducer';
import {connect} from 'react-redux';
import {compose} from 'redux'
import {WithAuthRedirect} from '../../../hoc/WithAuthRedirect'
import Preloader from '../../common/preloader/Preloader'

class CurrentDialogContainer extends React.Component{

  componentDidMount() {
    this.props.GetMessagesInitial(7099)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.dataMessage!==prevProps.dataMessage){
      // this.props.GetMessagesThunkCreator(8775)
    }
  }

  render() {
    // debugger
    return <>
      {this.props.isFetching?
        <Preloader/>
        :null}
      <CurrentDialog
        dataNewMessageText={this.props.dataNewMessageText}
        dataMessage={this.props.dataMessage}
        dataDialogsName={this.props.dataDialogsName}
        SendMessage={this.props.SendMessage}
        SendMessageThunkCreator={this.props.SendMessageThunkCreator}
        isSending={this.props.isSending}
        // GetMessages={this.props.GetMessages}
      />
    </>
  }
}

let mapStateToProps =(state)=>{
  return {
    dataNewMessageText: state.Message.dataNewMessageText,
    dataMessage: state.Message.dataMessage,
    dataDialogsName:state.Message.dataDialogsName,
    isFetching:state.Message.isFetching,
    isSending:state.Message.isSending,
    userId:7099,
  }
}
// можно настроить селокторы для каждого пропса
// но нах это нужно не знаю
// он говорит нужно, для примера 2 сделал

// сюда можно воткнуть dataUsersSuperSelector(state)
// и передать туда что-то
// она не будет постояно вызываться и грузить процессор
// а зупуститься только когда нужно

export default compose(
  connect(mapStateToProps,
    {AddMessage,GetMessagesThunkCreator,GetMessagesInitial,SendMessageThunkCreator}),
  WithAuthRedirect
)(CurrentDialogContainer)
