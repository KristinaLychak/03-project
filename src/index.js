import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import {BrowserRouter} from 'react-router-dom';

// let postData = [
//   {id: 1, message: "Hello, how are you?", likeCount: 15},
//   {id: 2, message: "It's my first post", likeCount: 23},
//   {id: 2, message: "Sunny day", likeCount: 13},
//   {id: 2, message: "Relax", likeCount: 3},

// ]

// let DialogsData = [
//     { id: 1, name: 'Yaryna' },
//     { id: 2, name: 'Marichka' },
//     { id: 3, name: 'Andrey' },
//     { id: 4, name: 'Yaroslav' },
//     { id: 5, name: 'Oleg' },
//     { id: 6, name: 'Nastya' },
//   ]

//   let MessageData = [
//   { id: 1, message: 'Hello' },
//   { id: 2, message: 'How are you?' },
//   { id: 3, message: 'Yo-Yo' },
//   { id: 4, message: 'Yo-Yo' },
//   { id: 5, message: 'Yo-Yo' },
// ]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App state = {state} />
    </BrowserRouter>
 
  </React.StrictMode>
);


// const Dialogs = (props) => {
  

// const Message = (props) => {

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
