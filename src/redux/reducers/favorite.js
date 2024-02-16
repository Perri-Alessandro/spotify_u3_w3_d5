import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/favorite";

const initialState = {
  content: [],
};

const favorite = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,

        content: [...state.content, action.payload], //comma = concat
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,

        content: state.content.filter(
          (job) => job._id !== action.payload._id //tengo tutti i job tranne quello che ha action.payload (indice attuale)
        ),
      };
    default:
      return state;
  }
};
export default favorite;
