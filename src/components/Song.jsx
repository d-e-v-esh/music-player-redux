import React from "react";
import { useSelector } from "react-redux";

const Song = () => {
  const { currentSong, isPlaying } = useSelector((state) => state);
  // console.log(currentSong);
  return (
    <div className="song-container">
      <img
        src={currentSong.cover}
        alt="Song Cover"
        className={isPlaying ? "spinning" : ""}
      />

      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
