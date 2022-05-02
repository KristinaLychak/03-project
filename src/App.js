import React from 'react';
import './App.css';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Friends from './NavBar/Friends/Friends';
import { addPost } from './redux/state';
import DialogsContainer from './Dialogs/DialogsContainer';



const App = (props) => {

  return (
    
    <div className='app-wrapper'>
      <Header />
      <NavBar  />
      <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer store = {props.store}/>} />  
            <Route path="/profile" element={<Profile 
                    store = {props.store}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friend" element={<Friends friendsData = {props.friendsData} />} />
          </Routes>
      </div>
    </div>
    
  
  );
}

export default App;
