import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message'


const Dialogs = (props) => {
    
    let dialogsElement = props.state.DialogsData.map(dialogs => < DialogsItem name={dialogs.name} id={dialogs.id}
        />);

    let messageElement = props.state.MessageData.map(message => <Message message={message.message} />

        );

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messageElement}
            </div>
        </div>);
}

export default Dialogs;