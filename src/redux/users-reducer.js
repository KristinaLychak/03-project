import {usersAPI} from '../API/api';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGELE_IS_FETCHING = 'TOGGELE_IS_FETCHING';
const TOGGELE_IS_FOLLOWING_PROGRESS = 'TOGGELE_IS_FOLLOWING_PROGRESS';
export const followSuccess = (usersId) => ({ type: 'FOLLOW', usersId })
export const unfollowSuccess = (usersId) => ({ type: 'UNFOLLOW', usersId })
export const setUsers = (users) => ({ type: 'SET_USERS', users })
export const setCurrentPage = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount })
export const toggelIsFetting = (isFetching) => ({ type: 'TOGGELE_IS_FETCHING', isFetching })
export const toggelFollowingProgress = (isFetching, userId) => ({ type: 'TOGGELE_IS_FOLLOWING_PROGRESS', isFetching, userId })



let initialState = {
  users: [ ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress:[]
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u =>  {
          if (u.id === action.usersId) {
            return {...u, followed: true}
          }
            return u;
          })
        }
        case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.usersId) {
            return {...u, followed: false}
          }
            return u;
          })
        }

        case SET_USERS: {
      return {
        ...state,users: action.users
        }}

        case SET_CURRENT_PAGE: {
          return { ...state,currentPage: action.users}}

          case SET_TOTAL_USERS_COUNT: {
            return { ...state,totalUsersCount: action.count}}

            case TOGGELE_IS_FETCHING: {
              return { ...state,isFetching: action.isFetching}}
              case TOGGELE_IS_FOLLOWING_PROGRESS: {
                return { ...state,
                    followingInProgress: action.isFetching
                  ? [...state.followingInProgress, action.userId]
                  : state.followingInProgress.filter(id => id!=  action.userId)}}
          
          
    default:
      return state;
          } 
        }

    export const getUsers = (currentPage, pageSize)=>{
      return(dispatch) => {
        dispatch (toggelIsFetting (true));
        usersAPI.getUsers(currentPage,pageSize)
             .then(data => {
              dispatch (toggelIsFetting (false));
              dispatch (setUsers(data.items));
              dispatch (setTotalUsersCount(data.totalCount));
            });
      }
    }
      export const follow = (userId) => {
        return(dispatch) => {
          dispatch (toggelFollowingProgress (true, userId));
          usersAPI.follow(userId)
               .then(response => {
                if (response.data.resultCode == 0) {
                dispatch (followSuccess (userId));}
                dispatch (toggelFollowingProgress (false, userId));
        });
      }} 
  
      export const unFollow = (userId) => {
        return(dispatch) => {
          dispatch (toggelFollowingProgress (true, userId));
          usersAPI.unfollow(userId)
               .then(response => {
                if (response.data.resultCode == 0) {
                dispatch (unfollowSuccess(userId));
              }
                dispatch (toggelFollowingProgress (false, userId));
        });
      }}
    

export default usersReducer;