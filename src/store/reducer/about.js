export default function about(state = {
  data: {},
  loading: true
}, action) {
  let newState;
  switch (action.type) {
    case "About_UPDATA":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    case "About_SUCC":
      state.data = action.data;
      state.loading = true;
      newState = Object.assign({}, state);
      return newState;
    case "About_ERROR":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}