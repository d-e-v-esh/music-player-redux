import Player from "./components/Player";
import React, { useEffect } from "react";
import Song from "./components/Song";
import "./styles/app.scss";
import Nav from "./components/Nav";
import Library from "./components/Library";
import { useSelector, useDispatch } from "react-redux";
import { playSong } from "./store/Player";

function App() {
  const dispatch = useDispatch();

  const { isLibraryOpen, currentSong } = useSelector((state) => state);

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
