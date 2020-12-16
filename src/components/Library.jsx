import React from "react";
import LibrarySong from "./LibrarySong";
import { useSelector } from "react-redux";

const Library = () => {
  const { allSongs, currentSong, isLibraryOpen } = useSelector(
    (state) => state
  );

  return (
    <div className={`library ${isLibraryOpen ? "active-library" : " "}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {allSongs.map((song) => (
          <LibrarySong
            song={song}
            isCurrent={song.id === currentSong.id}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
