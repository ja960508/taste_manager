import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./auth";

const rootReducer = combineReducers({
  auth,
  posts,
});

export default rootReducer;
