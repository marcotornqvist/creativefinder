import React, { useContext, useRef } from "react";
import NavigationContext from "../../context/navigation/navigationContext";
import ViewportContext from "../../context/viewport/viewportContext";
import Results from "./Results";
import useOutsideClick from "../../hooks/useOutsideClick";

const Search = () => {
  const navigationContext = useContext(NavigationContext);
  const viewportContext = useContext(ViewportContext);
  const { searchText, setSearchText, toggleSearch } = navigationContext;
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
