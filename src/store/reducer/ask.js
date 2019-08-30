export default function ask(state = {data: {}}, action) {
  let newState;
  switch (action.type) {
    case "Ask_Updata":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "Ask_Succ":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "Ask_Error":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}