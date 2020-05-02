import Posts from './Posts'
import {AddPost} from '../.././redux/profile-reducer'
import {connect} from 'react-redux';

let mapStateToProps =(state)=>{
  return {
    dataNewPostText: state.Profile.dataNewPostText,
    dataPostOld: state.Profile.dataPostOld
  }
}

let mapDispatchToProps = (dispatch)=>{
  return{
    AddPost:(MyPostText)=>{
      dispatch(AddPost(MyPostText))
    }
  }
}


const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;
