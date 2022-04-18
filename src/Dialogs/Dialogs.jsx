import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
     <div className = {classes.dialogs}>
         <div className = {classes.dialogsItem}>
             <div className = {classes.dialog + ' ' + classes.active} >
                 <NavLink to ='/dialogs/1'>Yaryna</NavLink>
                 </div>
                 <div className = {classes.dialog}>
                 <NavLink to ='/dialogs/2'>Marichka</NavLink>
                 </div>
                 <div className = {classes.dialog}>
                 <NavLink to ='/dialogs/3'>Andrey</NavLink>
                 </div>
                 <div className = {classes.dialog}>
                 <NavLink to ='/dialogs/4'>Yaroslav</NavLink>
                 </div>
                  <div className = {classes.dialog}>
                  <NavLink to ='/dialogs/5'>Oleg</NavLink>
                 </div>
                 <div className = {classes.dialog}>
                  <NavLink to ='/dialogs/6'>Nastya</NavLink>
                 </div>
         </div>
         <div className={classes.messages}>
             <div className={classes.message}>Hello</div>
              <div className={classes.message}>How are you?</div>
              <div className={classes.message}>Yo-Yo</div>
         </div>    
    </div>);
}

export default Dialogs;