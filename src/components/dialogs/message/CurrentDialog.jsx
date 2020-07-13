import React from 'react';
import '../../.././App.css';
import DialogsName from './DialogsName'
import Message from './Message';
import {reduxForm,Field} from 'redux-form'
import {requiredField,maxLenghtCreator} from '../../../utilits/validators/validators'
import {Textarea} from '../../common/formsControler/FormsControler'
import {SendMessagegApi} from '../../../api/api'

const CurrentDialog = (props) => {
// debugger
  let dataRenderMessage =
    props.dataMessage.map( el => <Message text={el.body} from={el.senderId} avasrc={el.avasrc}/>)
  let dataRenderDialogsName =
    props.dataDialogsName.map( el => <DialogsName GetMessages={props.GetMessages} name={el.name} id={el.id}/>)

  let AddNewMessage = (values) => {
    props.SendMessage(values.MyMessageText);
  }

  return (
    <div className='dialogs'>
      <div className='dialogs__current'>
        {dataRenderMessage}
      </div>
      <div className='dialogs__list'>
        {dataRenderDialogsName}
      </div>
      <ReduxMessageForm onSubmit={AddNewMessage}/>
    </div>
  );
}

const MessageForm = (props) => {
  // debugger
  // const send=()=>{
  //   let body = document.getElementByClass("dialogs__message-area").value;
  //   SendMessagegApi(8775,body);
  //   alert(body)
  // }

  return (
    <form className='dialogs__message' onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name='MyMessageText'
        className='dialogs__message-area'
        rows="2"
        placeholder="Your message..."
        >
      </Field>
      <button
        className='dialogs__message-button'
        // onClick={send}
        >
        Send
      </button>
    </form>
  )
}

const ReduxMessageForm = reduxForm({
  form:'message'
})(MessageForm)

export default CurrentDialog;
