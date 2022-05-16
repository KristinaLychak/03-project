import React from "react";
import styles from './Users.module.css';
import userPhoto from '../assets/images/images2.png';
import { NavLink } from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) { pages.push(i); }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageChanged(p); 
                    }}> {p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={styles.userPhoto} />
                        </NavLink>

                    </div>
                    <div>
                        {u.followed
                            ? <button disabled = {props.followingInProgress
                                .some (id => id === u.id)} 
                            onClick={() => {props.unfollow (u.id)}}>
                            Unfollow</button>
                            : <button disabled = {props.followingInProgress
                                .some (id => id === u.id)}  
                            onClick={() => {props.follow (u.id)}}>
                            Follow</button>}
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
    </div>
}



export default Users;


{/* 
     id: 1, photoUrl:'https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80', 
    followed: false, fullname: 'Marichka', status: 'I am a teacher', location: { city: 'Lviv', country: 'Ukraine' }}, */}
