export default function detail(state = {
  data: {},
  loading: true
}, action) {
  let newState;
  switch (action.type) {
    case "Detail_Updata":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    case "Detail_Succ":
      state.data = action.data.data;
      state.loading = true;
      newState = Object.assign({}, state);
      return newState;
    case "Detail_Error":
      state.data = {};
      state.loading = false;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}