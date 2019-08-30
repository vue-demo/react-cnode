export default function signin(state = {data: {}}, action) {
  let newState;
  switch (action.type) {
    case "Success_Login":
      // console.log('登录成功', action);
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "Fall_Login":
      // console.log('登录失败', action);
      state = action;
      newState = Object.assign({}, state);
      return newState;
    case "Log_Out":
      state = action;
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}