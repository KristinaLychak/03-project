import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Friends.module.css';


const Friends =() => {
    return (
        <div>

   
        <h2 className= {classes.friends}>
            Friends
        </h2>
        <ul className={classes.item}>
            <li>Andrey</li>
        <img src =''/>
            <li>
            Yaryna
            </li>
            <li>
            Nastya
            </li>
        </ul>
        </div>
    )
}


export default Friends;

// const friendItem = (props) => {
//     let path = "/friend/" + props.id;
//     return (
//         <div className={classes.friends}>
//         <NavLink to = {path}> {props.name}</NavLink>
//         </div>
//     )}

// const Friends = (props) => {
    
//     let friendsData = [
//         { id: 1, name: 'Yaryna' },
//         { id: 2, name: 'Marichka' },
//         { id: 3, name: 'Andrey' },
//       ]
      
//       let friendElement = 
//       props.friendsData.map (friends => < friendItem name={friends.name}
//      />);

  
//         return (
//             <div className={classes.friends}>
//             {friendElement}
//             </div>  
//         );
// }



// const DialogsItem = (props) => {
//     let path = '/dialogs/' + props.id
//     return (
//         <div className={classes.dialog + ' ' + classes.active} >
//             <NavLink to={path}>{props.name}</NavLink>
//         </div>)
// }