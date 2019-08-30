export default function detail(state = {data: {}}, action) {
  let newState;
  switch (action.type) {
    case "Detail_Updata":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "Detail_Succ":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "Detail_Error":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}