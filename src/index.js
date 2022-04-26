import store from './redux/state'; 
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';




let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch.bind (store)}/>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree (store.getState());
store.subscribe (rerenderEntireTree);


reportWebVitals();


// let rerenderEntireTree =(state) => {
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App state = {state} addPost = {addPost}/>
//      </BrowserRouter>
 
//   </React.StrictMode>
//   );
// }



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

