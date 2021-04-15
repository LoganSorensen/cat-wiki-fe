import { combineReducers } from "redux";

import { setCats } from "./setCatsReducer";

const rootReducer = combineReducers({
  setCats,
});

export default rootReducer;
