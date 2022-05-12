const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGELE_IS_FETCHING = 'TOGGELE_IS_FETCHING';
export const follow = (usersId) => ({ type: 'FOLLOW', usersId })
export const unFollow = (usersId) => ({ type: 'UNFOLLOW', usersId })
export const setUsers = (users) => ({ type: 'SET_USERS', users })
export const setCurrentPage = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount })
export const toggelIsFetting = (isFetching) => ({ type: 'TOGGELE_IS_FETCHING', isFetching })



let initialState = {
  users: [ ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
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
          
          
    default:
      return state;
          }
        }
  

export default usersReducer;