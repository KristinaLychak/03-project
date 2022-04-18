import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/profile' className={event=>event.isActive? classes.active : classes.item }>Profile</NavLink>
                <div className={classes.item}>
                    <NavLink to="/dialogs" className={event=>event.isActive? classes.active : classes.item }>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/news" className={event=>event.isActive? classes.active : classes.item } >News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/music' className={event=>event.isActive? classes.active : classes.item }>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/settings" className={event=>event.isActive? classes.active : classes.item }>Settings</NavLink>
                </div>
            </div>
        </nav>);
}

export default NavBar;


//activeclassName={({isActive}) => isActive ? 'classes.activeLink' :''
//activeClassName={classes.activeLink}
