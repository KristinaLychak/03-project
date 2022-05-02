import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreate, sendMessageCreate} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage; 

    let onSendMessageClick =() => {
        props.store.dispatch(sendMessageCreate());
    }

    let onNewMessageChange =(body  ) => {
         props.store.dispatch(updateNewMessageBodyCreate(body));    
    }

    return <Dialogs updateNewMessageBody = {onNewMessageChange} sendMessage = {onSendMessageClick} 
    dialogsPage = {state}/>
}

export default DialogsContainer;