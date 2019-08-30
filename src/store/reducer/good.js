export default function good(state = {data: {}}, action) {
  let newState;
  switch (action.type) {
    case "Good_Updata":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "Good_Succ":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "Good_Error":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}