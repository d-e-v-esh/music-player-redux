import songData from "../data";

import { createSlice } from "@reduxjs/toolkit";
const initState = {
  allSongs: songData(),
  currentSong: { ...songData()[0] },
  isPlaying: false,
  isLibraryOpen: false,

  currentTime: 0,
  duration: 0,
  sliderTimer: 0,
};

const playerSlice = createSlice({
  name: "color",
  initialState: initState,
  reducers: {
    playAndPause(state, action) {
      state.isPlaying = action.payload;
    },
    timerUpdate(state, action) {
      state.currentTime = action.payload.currentTime;
      state.duration = action.payload.duration;
    },
    dragSliderSync(state, action) {
      state.currentTime = action.payload;
    },
    updateCurrentSong(state, action) {
      state.currentSong = action.payload;
    },
    skipBackOrForth(state, action) {
      state.currentSong = action.payload;
    },
    libraryToggle(state, action) {
      state.isLibraryOpen = !state.isLibraryOpen;
    },
  },
});

export const {
  playAndPause,
  timerUpdate,
  dragSliderSync,
  updateCurrentSong,
  skipBackOrForth,
  libraryToggle,
} = playerSlice.actions;

export default playerSlice.reducer;
