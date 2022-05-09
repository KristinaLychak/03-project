import React from "react";
import { FOLLOWAC, SET_USERSAC, UNFOLLOWAC } from "../redux/users-reducer";
import Users from "./Users";
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage   .users}
    }
    let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(FOLLOWAC(userId));},
        unfollow: (userId) => {
                dispatch(UNFOLLOWAC(userId));},

        setUsers: (users) => {
                    dispatch(SET_USERSAC(users));},
    }}
       


    export default connect(mapStateToProps, mapDispatchToProps)(Users);