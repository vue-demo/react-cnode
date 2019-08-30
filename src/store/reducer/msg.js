export default function msg(state = {
  msg: {},
  count: {},
  loading: true
}, action) {
  let newState;
  switch (action.type) {
    case "Msg_Updata":
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    case "Msg_Succ":
      state.msg = action.data;
      state.loading = true;
      newState = Object.assign({}, state);
      return newState;
    case "Msg_Error":
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    case "Msg_count_Updata":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    case "Msg_count_Succ":
      state.count = action.data;
      state.loading = true;
      newState = Object.assign({}, state);
      return newState;
    case "Msg_count_Error":
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}