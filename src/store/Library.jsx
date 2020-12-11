// Action Types

const OPEN_AND_CLOSE_LIBRARY = "libraryToggle";

// Action Creators

export const libraryToggle = () => {
  return {
    type: OPEN_AND_CLOSE_LIBRARY,
  };
};

// Store

const initState = {
  isLibraryOpen: false,
};

// Reducers

export default function libraryReducer(state = initState, action) {
  switch (action.type) {
    case OPEN_AND_CLOSE_LIBRARY:
      return {
        ...state,
        isLibraryOpen: !state.isLibraryOpen,
      };

    default:
      return { ...state };
  }
}
