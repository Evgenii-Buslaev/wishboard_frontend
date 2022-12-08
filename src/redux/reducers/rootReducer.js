import { combineReducers } from "redux";
import cardsReducer from "./cardsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  cardsReducer,
  userReducer,
});

export default rootReducer;
