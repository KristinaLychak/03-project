import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hello, how are you?", likeCount: 15 },
        { id: 2, message: "It's my first post", likeCount: 23 },
        { id: 3, message: "Sunny day", likeCount: 13 },
        { id: 4, message: "Relax", likeCount: 3 },
      ],
      newPostText: 'newText'
},

    dialogsPage: {
      DialogsData: [
        { id: 1, name: 'Yaryna' },
        { id: 2, name: 'Marichka' },
        { id: 3, name: 'Andrey' },
        { id: 4, name: 'Yaroslav' },
        { id: 5, name: 'Oleg' },
        { id: 6, name: 'Nastya' },
      ],

      MessageData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo-Yo' },
        { id: 4, message: 'Yo-Yo' },
        { id: 5, message: 'Yo-Yo' },
      ],
      newMessageBody: ''
    },
    sidebar: { 

    },
  },

  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch (action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);
      this._callSubscriber(this._state);
    }
  }


    window.store = store;

    export default store;
  

// export const addPostActionCreate = () => ({type:'ADD_POST'})
// export const updateNewPostTextActionCreate = (text) => ({type:'UPDATE_NEW_POST_TEXT', newText: text})

// export const sendMessageCreate = () => ({type:'SEND_MESSAGE'}) 
// export const updateNewMessageBodyCreate = (body) => ({type:'UPDATE_NEW_MESSAGE_BODY', body: body })

// const ADD_POST = 'ADD_POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
// const SEND_MESSAGE = 'SEND_MESSAGE';




// let rerenderEntireTree = () => {
//   console.log ('state changed');
// }


// let state = {
//   profilePage: {
//     postData: [
//       { id: 1, message: "Hello, how are you?", likeCount: 15 },
//       { id: 2, message: "It's my first post", likeCount: 23 },
//       { id: 3, message: "Sunny day", likeCount: 13 },
//       { id: 4, message: "Relax", likeCount: 3 },
//     ],
//     newPostText: 'newText'
//     //     sidebar: [
//     //       { }

//     //     ],
//   },


//   dialogsPage: {
//     DialogsData: [
//       { id: 1, name: 'Yaryna' },
//       { id: 2, name: 'Marichka' },
//       { id: 3, name: 'Andrey' },
//       { id: 4, name: 'Yaroslav' },
//       { id: 5, name: 'Oleg' },
//       { id: 6, name: 'Nastya' },
//     ],

//     MessageData: [
//       { id: 1, message: 'Hello' },
//       { id: 2, message: 'How are you?' },
//       { id: 3, message: 'Yo-Yo' },
//       { id: 4, message: 'Yo-Yo' },
//       { id: 5, message: 'Yo-Yo' },
//     ]
//   },
// }



// export let addPost = () => {
//   let newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likeCount: 0
//   };
//   state.profilePage.postData.push(newPost);
//   state.profilePage.newPostText = '';
//   rerenderEntireTree(state);

// }

// export let updatenewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//   rerenderEntireTree = observer;


// }

