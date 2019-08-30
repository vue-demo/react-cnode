import {combineReducers} from "redux";

// reducer
import all from "./all";
import good from "./good";
import share from "./share";
import ask from "./ask";
import detail from "./detail";
import user from "./user";
import publish from "./publish";
import msg from "./msg";

let Index = combineReducers({
  all,
  good,
  share,
  ask,
  detail,
  publish,
  msg,
  user
});

export default Index;