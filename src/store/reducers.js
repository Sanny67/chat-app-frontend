import { combineReducers } from "redux";
import Auth from "./Auth/reducers.js";


const rootReducer = combineReducers({
  Auth,
});

export default rootReducer;
