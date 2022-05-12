const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const addPostActionCreate = () => ({ type: 'ADD_POST' })
export const updateNewPostTextActionCreate = (text) => ({ type: 'UPDATE_NEW_POST_TEXT', newText: text })
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile })

let initialState = {
  postData: [
    { id: 1, message: "Hello, how are you?", likeCount: 15 },
    { id: 2, message: "It's my first post", likeCount: 23 },
    { id: 3, message: "Sunny day", likeCount: 13 },
    { id: 4, message: "Relax", likeCount: 3 },],
  newPostText: 'newText',
  profile: null
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ''
      };

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }

    case SET_USER_PROFILE: {
      return {
        ...state, profile: action.profile
      }
    }
      
    default:
      return state;
  }
}

export default profileReducer;

