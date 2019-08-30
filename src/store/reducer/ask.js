export default function ask(state = {
  data: {},
  loading: true
}, action) {
  let newState;
  switch (action.type) {
    case "Ask_Updata":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    case "Ask_Succ":
      state.data = action.data;
      state.loading = true;
      newState = Object.assign({}, state);
      return newState;
    case "Ask_Error":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}