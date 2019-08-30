export default function all(state = {
  data: {},
  loading: true
}, action) {
  let newState;
  switch (action.type) {
    case "All_Updata":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    case "All_Succ":
      state.data = action.data;
      state.loading = true;
      newState = Object.assign({}, state);
      return newState;
    case "All_Error":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}