import React from "react";
import styles from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../assets/images/images2.png';


let Users = (props) => {
    let getUsers = () => {
     if (props.users.length === 0) {
     axios.get ("https://social-network.samuraijs.com/api/1.0/users") .then (response => {
    props.setUsers(response.data.items);
        
     });}
     
    }
     return <div>
         <button onClick = {getUsers}>Get Users</button>
         {
         props.users.map( u => <div key={u.id}>
             <span>
                 <div>
                     <img src = {u.photos.small != null ? u.photos.small : userPhoto } className = {styles.userPhoto}/>
                 </div>
                 <div>
                 {u.followed
                  ? <button onClick={() => {props.unfollow(u.id) } } >Unfollow</button> 
                  : <button onClick={() => {props.follow(u.id) } } >Follow</button> }
                 </div>
             </span>
             <span>
                 <span>
                     <div>{u.name} </div>
                     <div> {u.status}</div>
                 </span>
                 <span>
                 <div>{"u.location.country"} </div>
                <div> {"u.location.city"}</div>
                 </span>
             </span>
         </div>)}
         </div>}

export default Users;


// [
//     {
//       id: 1, photoUrl:'https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80', 
//       followed: false, fullname: 'Marichka', status: 'I am a teacher', location: { city: 'Lviv', country: 'Ukraine' }},
//     {
//       id: 2, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmnSabWD5a0W1Sasnht8NGqrRCDtSzFapGQ&usqp=CAU', 
//       followed: true, fullname: 'Yaryna', status: 'I am a menager', location: { city: 'Lviv', country: 'Ukraine' }},
//     {
//       id: 3, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-WCJO95DnDSeEKYUZyA7kdGe77bvM_P3Qw&usqp=CAU', 
//       followed: false, fullname: 'Andrew', status: 'And I am a boss', location: { city: 'Lviv', country: 'Ukraine' }},
//     {
//       id: 4, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdH_Ow8KdUOjLq3mrep39gj6ZJWx9Wdx8meQ&usqp=CAU', 
//       followed: false, fullname: 'Yaroslav', status: 'I am a good cook', location: { city: 'Lviv', country: 'Ukraine' }}
//     ]