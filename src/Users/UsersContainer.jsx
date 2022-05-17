import React from "react";
import { follow, setUsers, unFollow, setCurrentPage, getUsers, toggelFollowingProgress } from "../redux/users-reducer";
import Users from "./Users";
import { connect } from 'react-redux';
import * as axios from "axios";
import Preloader from "../component/common/Preloader/Preloader";
import { usersAPI } from "../API/api";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";




class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers((this.props.currentPage, this.props.pageSize))
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers((pageNumber, this.props.pageSize))
    }

    render() {

        return <> {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose
    (withAuthRedirect,
        connect(mapStateToProps, { follow, unFollow, setUsers, setCurrentPage, toggelFollowingProgress, getUsers })
        )(UsersAPIComponent);


// export default withAuthRedirect(connect(mapStateToProps, 
//     {follow, unFollow, setUsers, setCurrentPage, toggelFollowingProgress, getUsers})(UsersAPIComponent));

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