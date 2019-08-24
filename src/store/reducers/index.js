import {combineReducers} from "redux";

// reducers
import list from "./list";
import user from "./user";

let Index = combineReducers({
  list,
  user
});

export default Index;