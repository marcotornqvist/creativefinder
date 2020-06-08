import React, { useState, useContext } from "react";
import CreativeContext from "../../context/creative/creativeContext";
import NavigationContext from "../../context/navigation/navigationContext";

const MobileFilters = () => {
  const creativeContext = useContext(CreativeContext);
  const navigationContext = useContext(NavigationContext);
  const {
    sort,
    setSort,
    fields,
    filters,
    setFilter,
    removeFilter
  } = creativeContext;
  const { toggleFilters, showFilters } = navigationContext;
  const [sortOpen, setSortOpen] = useState(true);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  // const [categoriesOpen, setCategoriesOpen] = useState(true);

  fields.sort();

  return (
    <div className="advanced-search">
      <div className="selections">
        <div className="selection">
          <div className="selection-box" onClick={() => setSortOpen(!sortOpen)}>
            <span>Sort</span>
            <i className="fas fa-angle-down"></i>
          </div>
          <div className={`menu${sortOpen ? " open" : ""}`}>
            <ul>
              <li>
                <div
                  className={`box${sort === "Recent" ? " selected" : ""}`}
                  onClick={() => setSort("Recent")}
                >
                  <i className="fas fa-check"></i>
                </div>
                <span>Recent</span>
              </li>
              <li>
                <div
                  className={`box${sort === "Popular" ? " selected" : ""}`}
                  onClick={() => setSort("Popular")}
                >
                  <i className="fas fa-check"></i>
                </div>
                <span>Popular</span>
              </li>
              <li>
                <div
                  className={`box${sort === "Random" ? " selected" : ""}`}
                  onClick={() => setSort("Random")}
                >
                  <i className="fas fa-check"></i>
                </div>
                <span>Random</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="selection">
          <div
            className="selection-box"
            onClick={() => setCategoriesOpen(!categoriesOpen)}
          >
            <span>Categories</span>
            <i className="fas fa-angle-down"></i>
          </div>
          <div className={`menu${categoriesOpen ? " open" : ""}`}>
            <ul>
              {fields.map((item, index) => (
                <li key={index}>
                  <div className="box">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button onClick={() => toggleFilters(false)}>Close</button>
      </div>
    </div>
  );
};

export default MobileFilters;
