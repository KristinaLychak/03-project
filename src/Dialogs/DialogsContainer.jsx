import React from 'react';
import { connect } from 'react-redux';
import {updateNewMessageBodyCreate, sendMessageCreate} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';



// const DialogsContainer = (props) => {
//     let state = props.store.getState().dialogsPage; 

//     let onSendMessageClick =() => {
//         props.store.dispatch(sendMessageCreate());
//     }

//     let onNewMessageChange =(body  ) => {
//          props.store.dispatch(updateNewMessageBodyCreate(body));    
//     }

//     return <Dialogs updateNewMessageBody = {onNewMessageChange} sendMessage = {onSendMessageClick} 
//     dialogsPage = {state}/>
// }



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreate());
        },
        sendMessage:(body) => {
            dispatch (updateNewMessageBodyCreate(body))

        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;


