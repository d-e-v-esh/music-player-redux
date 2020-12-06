import allSongsData from "../data";
const initState = {
  allSongs: allSongsData,
  currentSong: [],
  songPlayStatus: false,
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
