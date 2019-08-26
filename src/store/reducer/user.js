export default function user(state = {
  success: false
}, action) {
  let newState;
  switch (action.type) {
    case "SUCCESS_LOGIN":
      //console.log('登录成功');
      state = {};
      state.success = true;
      state.id = action.id;
      state.loginname = action.loginname;
      state.avatar_url = action.avatar_url;
      state.accesstoken = action.accesstoken;
      newState = Object.assign({}, state);
      return newState;
    case "FAIL_LOGIN":
      //console.log('登录失败');
      state = {};
      state.success = false;
      state.failmessage = action.error_msg;
      newState = Object.assign({}, state);
      return newState;
    case "LOG_OUT":
      state = {};
      state.success = false;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}