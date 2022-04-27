const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessageCreate = () => ({ type: 'SEND_MESSAGE' })
export const updateNewMessageBodyCreate = (body) => ({ type: 'UPDATE_NEW_MESSAGE_BODY', body: body })

 const dialogsReducer = (state, action) => {
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