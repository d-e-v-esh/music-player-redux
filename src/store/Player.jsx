import songData from "../data";

import { createSlice } from "@reduxjs/toolkit";
const initState = {
  allSongs: songData(),
  currentSong: { ...songData()[4] },
  isPlaying: false,
  isLibraryOpen: false,

  currentTime: 0,
  duration: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState: initState,
  reducers: {
    playSong(state) {
      if (!state.isPlaying) {
        state.isPlaying = true;
      }
    },
    pauseSong(state) {
      if (state.isPlaying) {
        state.isPlaying = false;
      }
    },
    timerUpdate(state, action) {
      // console.log(action.payload.currentTime);
      // console.log(action.payload.duration);
      state.currentTime = action.payload.current;
      state.duration = action.payload.duration;
    },
    dragSliderSync(state, action) {
      console.log(action);
      state.currentTime = action.payload;
    },
    updateCurrentSong(state, action) {
      state.currentSong = action.payload;
    },
    skipBackOrForth(state, action) {
      // action.payload returns the index of the new song
      state.currentSong = state.allSongs[action.payload];
    },
    libraryToggle(state, action) {
      state.isLibraryOpen = !state.isLibraryOpen;
    },
  },
});

export const {
  playSong,
  pauseSong,
  timerUpdate,
  dragSliderSync,
  updateCurrentSong,
  skipBackOrForth,
  libraryToggle,
} = playerSlice.actions;

export default playerSlice.reducer;
