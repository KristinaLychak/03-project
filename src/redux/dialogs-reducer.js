const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessageCreate = () => ({ type: 'SEND_MESSAGE' })
export const updateNewMessageBodyCreate = (body) => ({ type: 'UPDATE_NEW_MESSAGE_BODY', body: body })

let initialState = {
  DialogsData: [
  { id: 1, name: 'Yaryna' },
  { id: 2, name: 'Marichka' },
  { id: 3, name: 'Andrey' },
  { id: 4, name: 'Yaroslav' },
  { id: 5, name: 'Oleg' },
  { id: 6, name: 'Nastya' },
],

MessageData: [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Yo-Yo' },
  { id: 4, message: 'Yo-Yo' },
  { id: 5, message: 'Yo-Yo' },
],
newMessageBody: ''

} 


const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.MessageData.push({ id: 6, message: body });  
      return state;
    default:
      return state;
  }
}

export default dialogsReducer;