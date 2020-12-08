// Action Types

// const PLAY_PAUSE_SONG;

// Player Reducer---------------------------------------

import songData from "../data";
const initState = {
  allSongs: songData(),
  currentSongId: [songData()[0].id],
  songPlayStatus: "PAUSED",
  isLibraryOpen: false,
  songInfo: [
    {
      currentTime: 0,
      duration: 0,
    },
  ],
};

const playerReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default playerReducer;
