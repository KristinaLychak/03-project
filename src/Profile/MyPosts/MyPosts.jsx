import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
      <Post message = 'Hello, how are you?' likeCount = '0'/>
      <Post message = "It's my first post" likeCount = '23' />

      </div>
    </div>);
}

export default MyPosts;