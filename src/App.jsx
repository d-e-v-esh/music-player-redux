import Player from "./components/Player";
import React, { useEffect } from "react";
import Song from "./components/Song";
import "./styles/app.scss";
import Nav from "./components/Nav";
import Library from "./components/Library";
import { useIsFirstRender } from "./utils/useIsFirstRender";
import { useSelector, useDispatch } from "react-redux";
import { playAndPause } from "./store/Player";
function App() {
  const dispatch = useDispatch();

  const isFirstRender = useIsFirstRender();
  const { isLibraryOpen } = useSelector((state) => state.library);
  const { isPlaying, currentSong } = useSelector((state) => state.player);

  // Set status to PLAYING whenever the current song changes
  useEffect(() => {
    if (!isFirstRender) {
      // setStatus("PLAYING");
      dispatch(playAndPause());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong]);

  return (
    <div className={`App ${isLibraryOpen ? "library-active" : ""}`}>
      <Nav />
      <Song />
      <Player />
      <Library />
    </div>
  );
}

export default App;
