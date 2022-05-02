import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../redux/profile-reducer";

const MyPosts = (props) => {

  let postsElement = 
  props.postData.map (posts => <Post  message = {posts.message} likeCount = {posts.likeCount} />);

  let newPostElement = React.createRef();

  let onAddPosts =()=> {
    props.addPosts();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText (text);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref = {newPostElement} value = {props.newPostText} />
        </div>
        <div>
          <button onClick ={onAddPosts}> Add Post </button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElement}
      </div>
    </div>);
}

export default MyPosts;