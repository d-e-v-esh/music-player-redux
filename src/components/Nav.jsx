import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { libraryToggle } from "../store/Library";

const Nav = () => {
  // Redux
  const dispatch = useDispatch();
  const { isLibraryOpen } = useSelector((state) => state.library);

  // Event Handlers
  const openLibraryHandler = () => {
    dispatch(libraryToggle());
  };

  return (
    <nav>
      <h1>Waves</h1>
      <button
        className={isLibraryOpen ? "library-active" : ""}
        onClick={openLibraryHandler}>
        Library
        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;
