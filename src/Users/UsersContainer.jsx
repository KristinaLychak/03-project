import React from "react";
import { follow, setUsers, unFollow, setCurrentPage, setTotalUsersCount, toggelIsFetting } from "../redux/users-reducer";
import Users from "./Users";
import { connect } from 'react-redux';
import * as axios from "axios";
import Preloader from "../component/common/Preloader/Preloader";




class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggelIsFetting (true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count = ${this.props.pageSize}`)
            .then(response => {
                this.props.toggelIsFetting (false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber) 
        this.props.toggelIsFetting (true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count = ${this.props.pageSize}`)
            .then(response => {
                this.props.toggelIsFetting (false);
                this.props.setUsers(response.data.items);
            })
    }
    

    render() {
        
        return <> {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow} />
            </>}}


        let mapStateToProps = (state) => {
            return {
                users: state.usersPage.users,
                pageSize: state.usersPage.pageSize,
                totalUsersCount: state.usersPage.totalUsersCount,
                currentPage: state.usersPage.currentPage,
                isFetching: state.usersPage.isFetching
            }
        }
       
export default connect(mapStateToProps, 
    {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggelIsFetting})(UsersAPIComponent);

     // let mapDispatchToProps = (dispatch) => {
        //     return {
        //         follow: (userId) => {
        //             dispatch(FOLLOWAC(userId));
        //         },
        //         unfollow: (userId) => {
        //             dispatch(UNFOLLOWAC(userId));
        //         },

        //         setUsers: (users) => {
        //             dispatch(SET_USERSAC(users));
        //         },
        //         setCurrentPage: (pageNumber) => {
        //             dispatch(SET_CURRENTPAGEAS(pageNumber));
        //         },
        //         setTotalUsersCount: (totalCount) => {
        //             dispatch(setTotalUsersCountAS(totalCount));
        //         },
        //         toggelIsFetting: (isFetting) => {
        //             dispatch(toggelFettingAS(isFetting));
        //         }
        //     }
        // }