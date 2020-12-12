import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../store/Player";

const LibrarySong = ({ song, isCurrent }) => {
  const dispatch = useDispatch();

  // const { currentSong, allSongs } = useSelector((state) => state.player);
  const songSelectHandler = () => {
    // Space where I messed up earlier
    dispatch(setCurrentSong(song));
  };

  return (
    <div onClick={songSelectHandler} className="library-song">
      <img src={song.cover} alt={song.name} />

      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
