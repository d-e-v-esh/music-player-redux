import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import Nav from "./components/Nav";
import Library from "./components/Library";
import { useIsFirstRender } from "./hooks/useIsFirstRender";

function App() {
  const isFirstRender = useIsFirstRender();

  return (
    <div className="App">
      <Nav />
      <Song />
      <Player />
      <Library />
    </div>
  );
}

export default App;
