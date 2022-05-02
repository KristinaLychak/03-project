import React from 'react';
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../redux/profile-reducer";
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();

//   let addPosts =()=> {
//     props.store.dispatch(addPostActionCreate());
//   }

//   let onPostChange = (text) => {
//     let action = (updateNewPostTextActionCreate(text));
//     props.store.dispatch(action)
//   }

//   return (
//     <MyPosts updateNewPostText = {onPostChange}  addPosts ={addPosts} postData = {state.profilePage.postData}/>
//   )
// }


let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = (updateNewPostTextActionCreate(text));
      dispatch(action)
      },
      addPosts: () => {
        dispatch(addPostActionCreate());
      }
  }
} 

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;