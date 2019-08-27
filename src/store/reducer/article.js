export default function article(state = {
  data: {},
  loading: true
}, action) {
  let newState;
  switch (action.type) {
    case "Article_UPDATA":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    case "Article_SUCC":
      state.data = action.data;
      state.loading = true;
      newState = Object.assign({}, state);
      return newState;
    case "Article_ERROR":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}