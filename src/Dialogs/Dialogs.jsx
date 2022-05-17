import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';



const Dialogs = (props) => {

    let state = props.dialogsPage; 

    let dialogsElement = state.DialogsData.map(dialogs => < DialogsItem name={dialogs.name} key={dialogs.id} id={dialogs.id}/>);
    let messageElement = state.MessageData.map(message => <Message message={message.message} key={message.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick =() => {
        props.sendMessage();
    }

    let onNewMessageChange =(e) => {
         let body = e.target.value;
         props.updateNewMessageBody(body);    
    }


    if (!props.isAuth) return <Navigate to={"/login"}/>

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