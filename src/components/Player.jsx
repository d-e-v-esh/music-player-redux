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

const Player = () => {
  const dispatch = useDispatch();

  const { isPlaying, currentSong } = useSelector((state) => state.player);
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

    return current;
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input
          type="range"
          min={0}
          // max={songInfo.duration}
          // value={songInfo.currentTime}
          // onChange={seek}
        />
        <p>End Time</p>
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
