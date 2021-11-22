import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duretion: "4:00" },
    { title: "Macarena", duretion: "2:30" },
    { title: "All Star", duretion: "3:15" },
    { title: "I Want It That Way", duretion: "1:45" },
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
