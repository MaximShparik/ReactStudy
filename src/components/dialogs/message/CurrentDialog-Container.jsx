import React from 'react';
import CurrentDialog from './CurrentDialog'
import {SendMessage,GetMessages,GetMessagesThunkCreator} from '../../.././redux/message-reducer';
import {connect} from 'react-redux';
import {compose} from 'redux'
import {WithAuthRedirect} from '../../../hoc/WithAuthRedirect'
import Preloader from '../../common/preloader/Preloader'

class CurrentDialogContainer extends React.Component{

  componentDidMount() {
    this.props.GetMessagesThunkCreator(8775)
  }
  // onPageChanged=(pageNumber)=>{
  //   this.props.GetUsersThunkCreator(pageNumber,this.props.pageSize)
  // }

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
        GetMessages={this.props.GetMessages}
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
    {SendMessage,GetMessages,GetMessagesThunkCreator}),
  WithAuthRedirect
)(CurrentDialogContainer)
