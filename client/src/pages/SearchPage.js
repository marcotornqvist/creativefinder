import React, { useContext, useRef } from "react";
import CreativeContext from "../context/creative/creativeContext";
import Results from "../components/navigation/Results";

const SearchPage = () => {
  const creativeContext = useContext(CreativeContext);
  const { searchText, setSearchText } = creativeContext;
  const searchInput = useRef(null);

  return (
    <div className="container">
      <div className="search-page">
        <div className="search-component">
          <form className="search-form">
            <div className="search-icon">
              <i className="fas fa-search"></i>
            </div>
            <input
              type="text"
              value={searchText}
              ref={searchInput}
              placeholder="Search Profile"
              onChange={e => setSearchText(e.target.value)}
            />
          </form>
          <Results />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
