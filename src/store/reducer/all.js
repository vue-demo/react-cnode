export default function all(state = {data: {}}, action) {
  let newState;
  switch (action.type) {
    case "All_Updata":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "All_Succ":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "All_Error":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}