import React, { useContext, useRef } from "react";
import NavigationContext from "../../context/navigation/navigationContext";
import Results from "./Results";
import useOutsideClick from "../../hooks/useOutsideClick";

const Search = () => {
  const navigationContext = useContext(NavigationContext);
  const { toggleSearch, searchText, setSearchText } = navigationContext;

  const ref = useRef();

  useOutsideClick(ref, () => {
    toggleSearch(false);
  });

  return (
    <div className="search" ref={ref}>
      <form className="search-form">
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
        <input
          type="text"
          value={searchText}
          placeholder="Search Profile"
          onChange={e => setSearchText(e.target.value)}
        />
      </form>
      <Results />
    </div>
  );
};

export default Search;
