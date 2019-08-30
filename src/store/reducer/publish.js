export default function publish(state = {data: {}}, action) {
  let newState;
  switch (action.type) {
    case "Publish_Updata":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "Publish_Succ":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "Publish_Error":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}