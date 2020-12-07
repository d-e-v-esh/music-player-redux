import { combineReducers } from "redux";
import playerReducer from "./Player";

const rootReducer = combineReducers({
  player: playerReducer,
});

export default rootReducer;
