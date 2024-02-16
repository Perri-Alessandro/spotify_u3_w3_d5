export const playSong = (song) => {
  return {
    type: "PLAY_SONG",
    payload: song,
  };
};
