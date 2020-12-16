import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./Player";

const store = configureStore({
  reducer: playerReducer,
});

export default store;
