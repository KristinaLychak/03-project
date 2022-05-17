import React from 'react';
import { connect } from 'react-redux';
import {updateNewMessageBodyCreate, sendMessageCreate} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {Navigate} from "react-router-dom";
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';



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
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreate());
        },
        updateNewMessageBody:(body) => {
            dispatch (updateNewMessageBodyCreate(body))

        }
    }
};



export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)


// let authRedirectContainer =  withAuthRedirect (Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (authRedirectContainer);

// export default DialogsContainer;


