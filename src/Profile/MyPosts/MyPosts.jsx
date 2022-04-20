import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = 
  props.postData.map (posts => <Post  message = {posts.message} likeCount = {posts.likeCount} />);

  let newPostElement = React.createRef();

  let addPosts =()=> {
    let text = newPostElement.current.value;
    alert (text);

  }

  return (
    <div className={classes.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref = {newPostElement}></textarea>
        </div>
        <div>
          <button onClick ={addPosts}> Add Post </button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElement}
      </div>
    </div>);
}

export default MyPosts;