import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "./alert";
import { authReducer } from "./auth";
import { profileReducer } from "./profile";
import { postReducer } from "./post";
import { loadLogin } from "./loginload";
const rootReducer = combineReducers({
  alertReducer,
  authReducer,
  profileReducer,
  postReducer,
  loadLogin,
});
export default rootReducer;
