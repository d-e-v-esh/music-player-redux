import { combineReducers } from "redux";
import playerReducer from "./Player";
import libraryReducer from "./Library";

const rootReducer = combineReducers({
  player: playerReducer,
  library: libraryReducer,
});

export default rootReducer;
