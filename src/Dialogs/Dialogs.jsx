import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active} >
            <NavLink to={path}>{props.name}</NavLink>
        </div>)
}

const Message = (props) => {
    return (
        <div className={classes.dialogs}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let DialogsData = [
        { id: 1, name: 'Yaryna' },
        { id: 2, name: 'Marichka' },
        { id: 3, name: 'Andrey' },
        { id: 4, name: 'Yaroslav' },
        { id: 5, name: 'Oleg' },
        { id: 6, name: 'Nastya' },
    ]

    let MessageData = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo-Yo' },
        { id: 4, message: 'Yo-Yo' },
        { id: 5, message: 'Yo-Yo' },
    ]
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogsItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogsItem name={DialogsData[1].name} id={DialogsData[1].id} />
            </div>
            <div className={classes.messages}>
                <Message message={MessageData[0].message} />
                <Message message={MessageData[1].message} />
                <Message message={MessageData[2].message} />
                <Message message={MessageData[3].message} />
                <Message message={MessageData[4].message} />
            </div>
        </div>);
}

export default Dialogs;