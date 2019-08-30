export default function publish(state = {data: {}}, action) {
  let newState;
  switch (action.type) {
    case "Msg_Updata":
      newState = Object.assign({}, state);
      return newState;
    case "Msg_Succ":
      state.data.has_read_messages = action.data.has_read_messages;
      state.data.hasnot_read_messages = action.data.hasnot_read_messages;
      newState = Object.assign({}, state);
      return newState;
    case "Msg_Error":
      newState = Object.assign({}, state);
      return newState;

    case "Count_Updata":
      newState = Object.assign({}, state);
      return newState;
    case "Count_Succ":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "Count_Error":
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}