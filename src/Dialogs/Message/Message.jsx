import React from 'react';
import classes from './../Dialogs.module.css';




const Message = (props) => {


    return (
        <div>
            <div className={classes.dialogs}>{props.message}
                <div className={classes.MessageArea}>
                    
                </div>
            </div>
        </div>
    );
}

export default Message;

