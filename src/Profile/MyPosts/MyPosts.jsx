import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postData = [
    {id: 1, message: "Hello, how are you?", likeCount: 15},
    {id: 2, message: "It's my first post", likeCount: 23},

  ]
  return (
    <div className={classes.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post  message = {postData[0].message} likeCount = {postData[0].likeCount} />
        <Post  message = {postData[1].message} likeCount = {postData[1].likeCount} />
      </div>
    </div>);
}

export default MyPosts;