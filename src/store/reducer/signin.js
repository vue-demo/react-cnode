export default function signin(state = {
  success: false
}, action) {
  let newState;
  switch (action.type) {
    case "Success_Login":
      // console.log('登录成功', action);
      state = {};
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "Fall_Login":
      // console.log('登录失败', action);
      state = {};
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "Log_Out":
      state = {};
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}