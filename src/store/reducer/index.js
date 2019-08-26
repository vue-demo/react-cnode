import {combineReducers} from "redux";

// reducer
import list from "./list";
import user from "./user";
import about from "./about";
import article from "./article";

let Index = combineReducers({
  list,
  user,
  about,
  article
});

export default Index;