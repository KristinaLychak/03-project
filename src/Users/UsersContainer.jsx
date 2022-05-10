import React from "react";
import { FOLLOWAC, SET_USERSAC, UNFOLLOWAC, SET_CURRENTPAGEAS, setTotalUsersCountAS} from "../redux/users-reducer";
import Users from "./Users";
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage }
    }
    let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(FOLLOWAC(userId));},
        unfollow: (userId) => {
                dispatch(UNFOLLOWAC(userId));},

        setUsers: (users) => {
                    dispatch(SET_USERSAC(users));},
        setCurrentPage: (pageNumber) => {
                    dispatch(SET_CURRENTPAGEAS(pageNumber));},
        setTotalUsersCount: (totalCount) => {
                     dispatch(setTotalUsersCountAS (totalCount));},

                    
    }}
       


    export default connect(mapStateToProps, mapDispatchToProps)(Users);