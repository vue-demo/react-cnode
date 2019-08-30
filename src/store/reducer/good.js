export default function good(state = {
  data: {},
  loading: true
}, action) {
  let newState;
  switch (action.type) {
    case "Good_Updata":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    case "Good_Succ":
      state.data = action.data;
      state.loading = true;
      newState = Object.assign({}, state);
      return newState;
    case "Good_Error":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}