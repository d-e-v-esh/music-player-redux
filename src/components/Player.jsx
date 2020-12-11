import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { playAndPause, timerUpdate } from "../store/Player";
import formatTime from "../utils/formatTime";

const Player = () => {
  // Redux
  const dispatch = useDispatch();
  const { isPlaying, currentSong, currentTime, duration } = useSelector(
    (state) => state.player
  );

  // Audio
  const audioReference = useRef(null);

  // Event Handlers
  const playSongHandler = () => {
    // If song is playing the pause it otherwise play
    if (isPlaying) {
      audioReference.current.pause();
      dispatch(playAndPause());
    } else {
      audioReference.current.play();
      dispatch(playAndPause());
    }
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    dispatch(timerUpdate(current, duration));
  };

  const dragHandler = (e) => {
    // Here "e.target.value" contains the position of the slider
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(currentTime)}</p>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={dragHandler}
        />
        <p>{formatTime(duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />

        <audio
          ref={audioReference}
          src={currentSong.audio}
          onTimeUpdate={timeUpdateHandler}></audio>
      </div>
    </div>
  );
};

export default Player;
