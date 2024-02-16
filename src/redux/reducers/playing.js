const initialState = {
  currentSong: null,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAY_SONG":
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
