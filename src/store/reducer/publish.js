export default function publish(state = {
  data: {},
  loading: true
}, action) {
  let newState;
  switch (action.type) {
    case "Publish_Updata":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    case "Publish_Succ":
      state.data = action.data;
      state.loading = true;
      newState = Object.assign({}, state);
      return newState;
    case "Publish_Error":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}