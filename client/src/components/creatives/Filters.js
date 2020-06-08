import React, { useState, useContext, useEffect } from "react";
import CreativeContext from "../../context/creative/creativeContext";

const Filters = ({ showFilters, mobile }) => {
  const creativeContext = useContext(CreativeContext);
  const {
    setSort,
    setCategory,
    setSubCategory,
    categories,
    sort,
    category,
    subCategory
  } = creativeContext;
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(true);
  const sortItems = ["Recent", "Popular", "Random"];

  useEffect(() => {
    if (mobile && showFilters) {
      setDropdown1(true);
      setDropdown2(true);
      setDropdown3(true);
    } else {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
    }
  }, [showFilters, mobile]);

  // Get Index of the selected category
  const getIndex = categories.findIndex(item => category === item.name);

  // TODO: Create the selections below the filters that shows all the different selected filters
  // TODO: Create animations with framer motion and not transitions in css

  return (
    <div className="filters">
      <div className="dropdowns">
        <div
          className="menu-button sort"
          onClick={() => setDropdown1(!dropdown1)}
        >
          <span>Sort</span>
          <i className="fas fa-angle-down"></i>
        </div>
        {dropdown1 && (
          <div className={`menu${dropdown1 ? " open" : ""}`}>
            <ul>
              {sortItems.map((item, index) => (
                <li key={index}>
                  <div className="content">
                    <div
                      className={`box${sort === item ? " selected" : ""}`}
                      onClick={() => setSort(item)}
                    >
                      <i className="fas fa-check"></i>
                    </div>
                    <span>{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div
          className="menu-button categories"
          onClick={() => setDropdown2(!dropdown2)}
        >
          <span>Categories</span>
          <i className="fas fa-angle-down"></i>
        </div>
        {dropdown2 && (
          <div className={`menu${dropdown2 ? " open" : ""}`}>
            <ul>
              {categories.map((item, index) => (
                <li key={index}>
                  <div className="content">
                    <div
                      className={`box${
                        category === item.name ? " selected" : ""
                      }`}
                      onClick={() => setCategory(item.name)}
                    >
                      <i className="fas fa-check"></i>
                    </div>
                    <span>{item.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div
          className="menu-button sub-categories"
          onClick={() => setDropdown3(!dropdown3)}
        >
          <span>Sub Categories</span>
          <i className="fas fa-angle-down"></i>
        </div>
        {dropdown3 && (
          <div className={`menu${dropdown3 ? " open" : ""}`}>
            {category ? (
              <ul>
                {categories[getIndex].subCategories.map((item, index) => (
                  <li key={index}>
                    <div className="content">
                      <div
                        className={`box${
                          subCategory === item ? " selected" : ""
                        }`}
                        onClick={() => setSubCategory(item)}
                      >
                        <i className="fas fa-check"></i>
                      </div>
                      <span>{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Category Selected</h3>
            )}
          </div>
        )}
      </div>
      <div className="selections">
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Filters;
