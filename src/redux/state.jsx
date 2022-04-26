export const addPostActionCreate = () => ({type:'ADD-POST'})
export const updateNewPostTextActionCreate = (text) => ({type:'UPDATE-NEW-POST-TEXT', newText: text})

let store = {
  _callSubscriber() {
    console.log('state changed')
  },
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hello, how are you?", likeCount: 15 },
        { id: 2, message: "It's my first post", likeCount: 23 },
        { id: 3, message: "Sunny day", likeCount: 13 },
        { id: 4, message: "Relax", likeCount: 3 },
      ],
      newPostText: 'newText'
      //     sidebar: [ { } ],
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
      ]
    },
  },

  getState() {
    return this._state;
  },

  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likeCount: 0
  //   }
  //   this._state.profilePage.postData.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);

  
  // updatenewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch (action) {
    if (action.type === 'ADD-POST'){

      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      }
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(this._state);

    }
  }
}


  
  




window.store = store;

export default store;



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

