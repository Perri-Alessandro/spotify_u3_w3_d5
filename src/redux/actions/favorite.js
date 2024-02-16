export const ADD_TO_FAVORITES = (job) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: job,
  };
};

export const REMOVE_FROM_FAVORITES = (job) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: job,
  };
};
