import React, { useContext } from "react";
import CreativeContext from "../../context/creative/creativeContext";
import SortFilter from "./Filters/SortFilter";
import CategoryFilter from "./Filters/CategoryFilter";
import SubcategoriesFilter from "./Filters/SubcategoriesFilter";

const variants = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0 }
};

const Filters = ({ showFilters, mobile }) => {
  const creativeContext = useContext(CreativeContext);
  const {
    sort,
    setSort,
    setCategory,
    category,
    subcategories,
    setSubcategories,
    resetFilters
  } = creativeContext;
  return (
    <div className="filters">
      <div className="dropdowns">
        <SortFilter
          variants={variants}
          showFilters={showFilters}
          mobile={mobile}
        />
        <CategoryFilter
          variants={variants}
          showFilters={showFilters}
          mobile={mobile}
        />
        <SubcategoriesFilter
          variants={variants}
          showFilters={showFilters}
          mobile={mobile}
        />
      </div>
      <button className="reset-btn mobile" onClick={() => resetFilters()}>
        Reset
      </button>
      <div className="selections">
        <div className="selection" onClick={() => setSort("remove")}>
          <span className="name">{sort}</span>
          <span className="remove-icon">&#10005;</span>
        </div>
        {category !== null && (
          <div className="selection" onClick={() => setCategory(category)}>
            <span className="name">{category.name}</span>
            <span className="remove-icon">&#10005;</span>
          </div>
        )}
        {subcategories.map((item, index) => (
          <div
            className="selection"
            onClick={() => setSubcategories(item)}
            key={index}
          >
            <span className="name">{item}</span>
            <span className="remove-icon">&#10005;</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
