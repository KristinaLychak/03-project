const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
export const addPostActionCreate = () => ({ type: 'ADD_POST' })
export const updateNewPostTextActionCreate = (text) => ({ type: 'UPDATE_NEW_POST_TEXT', newText: text })

let initialState = {
  postData: [
    { id: 1, message: "Hello, how are you?", likeCount: 15 },
    { id: 2, message: "It's my first post", likeCount: 23 },
    { id: 3, message: "Sunny day", likeCount: 13 },
    { id: 4, message: "Relax", likeCount: 3 },],
  newPostText: 'newText'
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0
      };
      let stateCopy = {...state};
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;

    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;

    }
      
    default:
      return state;
  }
}

export default profileReducer;

