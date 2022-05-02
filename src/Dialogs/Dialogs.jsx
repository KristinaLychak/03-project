import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreate, sendMessageCreate} from '../redux/dialogs-reducer';


const Dialogs = (props) => {

    let state = props.dialogsPage; 

    let dialogsElement = state.DialogsData.map(dialogs => < DialogsItem name={dialogs.name} id={dialogs.id}/>);
    let messageElement = state.MessageData.map(message => <Message message={message.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick =() => {
        props.sendMessage();
    }

    let onNewMessageChange =(e) => {
         let body = e.target.value;
         props.updateNewMessageBody(body);    
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div>{messageElement}</div>
                <div>
                    <div><textarea value={newMessageBody} 
                                    onChange = {onNewMessageChange}
                                    placeholder='Enter you message'></textarea></div>
                    <div> <button onClick={onSendMessageClick}> Send </button></div>
                </div>
            </div>
        </div>);
}

export default Dialogs;