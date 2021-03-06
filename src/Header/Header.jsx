import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://www.kindpng.com/picc/m/84-844378_ship-steering-wheel-logo-clipart-png-download-ship.png' />
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login:
            <NavLink to = {'/login'}>Login</NavLink>}
            </div>
            
        </header>);
}

export default Header;