import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { tittle: "No Scrubs", duretion: "4:00" },
    { tittle: "Macarena", duretion: "2:30" },
    { tittle: "All Star", duretion: "3:15" },
    { tittle: "I Want It That Way", duretion: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
