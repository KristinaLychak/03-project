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

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <NavBar /> 
      <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
      </div>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
