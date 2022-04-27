const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
export const addPostActionCreate = () => ({ type: 'ADD_POST' })
export const updateNewPostTextActionCreate = (text) => ({ type: 'UPDATE_NEW_POST_TEXT', newText: text })

const profileReducer = (state, action) => {
  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0
  };
  state.postData.push(newPost);
  state.newPostText = '';
  return state;

    case UPDATE_NEW_POST_TEXT:
  state.newPostText = action.newText;
  return state;

  default:
  return state;
}
}

export default profileReducer;

