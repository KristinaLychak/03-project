const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
export const FOLLOWAC = (usersId) => ({ type: 'FOLLOW', usersId })
export const UNFOLLOWAC = (usersId) => ({ type: 'UNFOLLOW', usersId })
export const SET_USERSAC = (users) => ({ type: 'SET_USERS', users })


let initialState = {
  users: [
  //   {
  //     id: 1, photoUrl:'', followed: false, fullname: 'Marichka', status: 'I am a teacher',
  //     location: { city: 'Lviv', country: 'Ukraine' }
  //   },
  //   {
  //     id: 2, photoUrl:'', followed: false, fullname: 'Yaryna', status: 'I am a menager',
  //     location: { city: 'Lviv', country: 'Ukraine' }
  //   },
  //   {
  //     id: 3, photoUrl:'', followed: false, fullname: 'Andrew', status: 'And I am a boss',
  //     location: { city: 'Lviv', country: 'Ukraine' }
  //   },
  //   {
  //     id: 4, photoUrl:'', followed: false, fullname: 'Yaroslav', status: 'I am a good cook',
  //     location: { city: 'Lviv', country: 'Ukraine' }
  //   },
  ]
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
        ...state,users:[...state.users, ...action.users] 
        }}
          
          
    default:
      return state;
          }
        }
  
export default usersReducer;