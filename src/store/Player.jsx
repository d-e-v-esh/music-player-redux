// Action Types

// const PLAY_PAUSE_SONG;

// Player Reducer---------------------------------------

import songData from "../data";
const initState = {
  allSongs: songData(), // If I run this data function then it is just going to return us the array of objects containing the song data
  currentSong: [songData()[0]],
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
