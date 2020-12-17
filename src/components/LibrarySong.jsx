import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentSong } from "../store/Player";

const LibrarySong = ({ song, isCurrent }) => {
  const dispatch = useDispatch();
  const { currentSong } = useSelector((state) => state);

  const songSelectHandler = () => {
    // Space where I messed up earlier
    dispatch(updateCurrentSong(song));
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${isCurrent ? "selected" : ""}`}
      // className={`library-song ${"selected"}`}
    >
      <img src={song.cover} alt={song.name} />

      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
