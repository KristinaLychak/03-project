import React from 'react';
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../redux/profile-reducer";
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPosts =()=> {
    props.store.dispatch(addPostActionCreate());
  }

  let onPostChange = (text) => {
    let action = (updateNewPostTextActionCreate(text));
    props.store.dispatch(action)
  }

  return (
    <MyPosts updateNewPostText = {onPostChange}  addPosts ={addPosts} postData = {state.profilePage.postData}/>
  )
}

export default MyPostsContainer;