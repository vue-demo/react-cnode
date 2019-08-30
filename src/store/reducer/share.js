export default function share(state = {data: {}}, action) {
  let newState;
  switch (action.type) {
    case "Share_Updata":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "Share_Succ":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "Share_Error":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}