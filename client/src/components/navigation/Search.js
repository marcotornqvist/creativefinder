import React, { useContext, useRef } from "react";
import CreativeContext from "../../context/creative/creativeContext";
import ViewportContext from "../../context/viewport/viewportContext";
import Results from "./Results";
import useOutsideClick from "../../hooks/useOutsideClick";

const Search = () => {
  const creativeContext = useContext(CreativeContext);
  const viewportContext = useContext(ViewportContext);
  const { searchText, setSearchText, toggleSearch } = creativeContext;
  const { width, breakpoint } = viewportContext;

  const ref = useRef();

  useOutsideClick(ref, () => {
    width >= breakpoint && toggleSearch(false);
  });

  return (
    <div className="search" ref={ref}>
      <form className="search-form">
        <i className="fas fa-search"></i>
        <input
          type="text"
          value={searchText}
          placeholder="Search Profile"
          onChange={e => setSearchText(e.target.value)}
        />
      </form>
      {width < breakpoint ? searchText !== "" && <Results /> : <Results />}
    </div>
  );
};

export default Search;
