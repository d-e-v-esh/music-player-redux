import songData from "../data";

// Action Types
const PLAY_AND_PAUSE = "playAndPause";
const PLAYER_TIMER_UPDATE = "timerUpdate";
const INPUT_SLIDER_UPDATE = "dragSliderSync";

// Action Creators
export const playAndPause = () => {
  return {
    type: PLAY_AND_PAUSE,
  };
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

// Player Redux State
const initState = {
  allSongs: songData(),
  currentSong: { ...songData()[0] },
  isPlaying: false,

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
        isPlaying: !state.isPlaying,
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

    default:
      return { ...state };
  }
}
