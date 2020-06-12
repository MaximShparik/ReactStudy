import React from 'react';
import '../.././App.css';
import PostOld from './PostOld';
import {reduxForm,Field} from 'redux-form'
import {requiredField,maxLenghtCreator} from '../../utilits/validators/validators'
import {Textarea} from '../common/formsControler/FormsControler'

const Posts = (props) => {
  // debugger

  let AddPost = (values) => {
    props.AddPost(values.MyPostText);
  }

  let dataRenderPostOld =
    props.dataPostOld.map( el => <PostOld photo={props.photo} message={el.message} id={el.id}/>)

  return (
    <div className='content__posts post'>
      <div className='post__new'>
        <p className='post__new-title'>Posts from my heart</p>
        <ReduxPostsForm onSubmit={AddPost}/>
      </div>
      {dataRenderPostOld}
    </div>
  );
}

const maxLenght10 = maxLenghtCreator(10)
// тут мы закинули валидатор в новую функцию
// чтобы он не крашил приложение
// изза максимальной глубины.....
const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        className='post__new-main'
        rows="2"
        placeholder="Your post..."
        name='MyPostText'
        component={Textarea}
        validate={[requiredField,maxLenght10]}
        >
      </Field>
      <button className='post__new-button'>
        Add
      </button>
    </form>
  )
}

const ReduxPostsForm = reduxForm({
  form:'post'
})(PostsForm)

export default Posts;
