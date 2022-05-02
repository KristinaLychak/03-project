import store from './redux/redux-store'; 
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';



// let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
      </BrowserRouter>, document.getElementById('root'));


// rerenderEntireTree ();

// store.subscribe (() =>{
//   rerenderEntireTree();
// });
  


{/* 
{/* // const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App state = {state} addPost = {addPost}/>
//      </BrowserRouter>
 
//   </React.StrictMode>
//   );
// }


// let rerenderEntireTree = (state) => { 
//   ReactDOM.render(
//     <BrowserRouter>
//       <App state={store.getState()} dispatch={store.dispatch.bind(store)} store = {store}/>
//     </BrowserRouter>, document.getElementById('root'));
// }

// rerenderEntireTree (store.getState());
// store.subscribe (rerenderEntireTree);


// reportWebVitals();



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();

// state={store.getState()} dispatch={store.dispatch.bind(store)} store = {store}

// let rerenderEntireTree =(state) => { */}
