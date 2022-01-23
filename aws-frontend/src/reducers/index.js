import { combineReducers } from "redux";

import task from "./task";
import schedule from "./schedule";

export default combineReducers({
  task,
  schedule,
});
