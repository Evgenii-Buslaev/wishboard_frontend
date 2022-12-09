import { combineReducers } from "redux";
import cardsReducer from "./cardsReducer";
import userReducer from "./userReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  cardsReducer,
  userReducer,
  appReducer,
});

export default rootReducer;
