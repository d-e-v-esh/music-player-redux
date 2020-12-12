import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import Nav from "./components/Nav";
import Library from "./components/Library";
// import { useIsFirstRender } from "./hooks/useIsFirstRender";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const isFirstRender = useIsFirstRender();
  const { isLibraryOpen } = useSelector((state) => state.library);

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
