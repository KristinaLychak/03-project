import React from 'react';
import './App.css';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Friends from './NavBar/Friends/Friends';
import { addPost } from './redux/state';



const App = (props) => {

  return (
    
    <div className='app-wrapper'>
      <Header />
      <NavBar  />
      <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs" element={<Dialogs 
                    state = {props.state.dialogsPage}/>} />  
            <Route path="/profile" element={<Profile 
                    profilePage = {props.state.profilePage} 
                    dispatch = {props.dispatch}/>} />
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
