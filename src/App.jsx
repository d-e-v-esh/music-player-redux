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
  const { isLibraryOpen } = useSelector((state) => state);
  // const { isPlaying, currentSong } = useSelector((state) => state.player);

  // const isLibraryOpen = true;

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
