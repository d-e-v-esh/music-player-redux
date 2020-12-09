import songData from "../data";

// Action Types
const PLAY_AND_PAUSE = "playAndPause";
const PLAYER_TIMER_UPDATE = "timerUpdate";

// Action Creators
export const playAndPause = () => {
  return {
    type: PLAY_AND_PAUSE,
  };
};

export const timerUpdate = (current, duration) => {
  return {
    type: PLAYER_TIMER_UPDATE,
    payload: {},
  };
};

// Player Redux State
const initState = {
  allSongs: songData(),
  currentSong: { ...songData()[0] },
  isPlaying: false,
  isLibraryOpen: false,
  songTimer: {
    currentTime: 0,
    duration: 0,
  },
};

// ----------------------------Player Reducer-------------------------
export default function playerReducer(state = initState, action) {
  switch (action.type) {
    case PLAY_AND_PAUSE:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };

    case PLAYER_TIMER_UPDATE:
      return {
        ...state,
        songTimer: {
          currentTime: action.payload.currentTime,
          duration: action.payload.duration,
        },
      };

    default:
      return { ...state };
  }
}
