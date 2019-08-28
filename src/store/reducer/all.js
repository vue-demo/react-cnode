export default function all(state = {
  data: {},
  loading: true
}, action) {
  let newState;
  switch (action.type) {
    case "TOPLIST_UPDATA":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    case "TOPLIST_SUCC":
      state.data = action.data.data;
      state.loading = true;
      newState = Object.assign({}, state);
      return newState;
    case "TOPLIST_ERROR":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}