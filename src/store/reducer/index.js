import {combineReducers} from "redux";

// reducer
import all from "./all";
import good from "./good";
import share from "./share";
import ask from "./ask";
import user from "./user";

let Index = combineReducers({
  all,
  good,
  share,
  ask,
  user
});

export default Index;