import React from 'react';
import '../../.././App.css';
import DialogsName from './DialogsName'
import Message from './Message';
import {reduxForm,Field} from 'redux-form'
import {requiredField,maxLenghtCreator} from '../../../utilits/validators/validators'
import {Textarea} from '../../common/formsControler/FormsControler'

const CurrentDialog = (props) => {
// debugger
  let dataRenderMessage =
    props.dataMessage.map( el => <Message text={el.text} from={el.from} class={el.class} avasrc={el.avasrc}/>)
  let dataRenderDialogsName =
    props.dataDialogsName.map( el => <DialogsName name={el.name} id={el.id}/>)

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
      <button className='dialogs__message-button'>
        Send
      </button>
    </form>
  )
}

const ReduxMessageForm = reduxForm({
  form:'message'
})(MessageForm)

export default CurrentDialog;
