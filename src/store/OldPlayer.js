import songData from "../data";

// Action Types
const PLAY_AND_PAUSE = "playAndPause";
const PLAYER_TIMER_UPDATE = "timerUpdate";
const INPUT_SLIDER_UPDATE = "dragSliderSync";
const UPDATE_CURRENT_SONG = "setCurrentSong"; // To be used when song is selected form the library

const SKIP_FORWARD_OR_BACKWARD = "skipBackOrForth"; // To be used when we click on the next or prev button

// Action Creators
export const playAndPause = (isPlayingBool) => (dispatch) => {
  // do some stuff here

  dispatch({
    type: PLAY_AND_PAUSE,
    payload: {
      isPlaying: isPlayingBool,
    },
  });
};

export const timerUpdate = (current, duration) => (dispatch) => {
  dispatch({
    type: PLAYER_TIMER_UPDATE,
    payload: {
      currentTime: current,
      duration: duration,
    },
  });
};

export const dragSliderSync = (dragTimer) => (dispatch) => {
  dispatch({
    type: INPUT_SLIDER_UPDATE,
    payload: {
      sliderTimer: dragTimer,
    },
  });
};

export const setCurrentSong = (newSelectedSong) => (dispatch) => {
  dispatch({
    type: UPDATE_CURRENT_SONG,
    payload: {
      newCurrentSong: newSelectedSong,
    },
  });
};

export const skipBackOrForth = (songIndex) => (dispatch) => {
  dispatch({
    type: SKIP_FORWARD_OR_BACKWARD,
    payload: {
      newCurrentSongIndex: songIndex,
    },
  });
};

// Player Redux State
const initState = {
  allSongs: songData(),
  currentSong: { ...songData()[0] },
  isPlaying: false,
  newCurrentSongIndex: 0,
  newCurrentSongID: {},
  currentTime: 0,
  duration: 0,
  sliderTimer: 0,
};

// ----------------------------Player Reducer-------------------------
export default function playerReducer(state = initState, action) {
  switch (action.type) {
    case PLAY_AND_PAUSE:
      return {
        ...state,
        isPlaying: action.payload.isPlaying,
      };

    case PLAYER_TIMER_UPDATE:
      return {
        ...state,
        currentTime: action.payload.currentTime,
        duration: action.payload.duration,
      };

    case INPUT_SLIDER_UPDATE:
      return {
        ...state,
        currentTime: action.payload.sliderTimer,
      };

    case UPDATE_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload.newCurrentSong,
      };

    case SKIP_FORWARD_OR_BACKWARD:
      return {
        ...state,
        currentSong: state.allSongs[action.payload.newCurrentSongIndex],
      };
    default:
      return { ...state };
  }
}
