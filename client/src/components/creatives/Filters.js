import React, { useContext } from "react";
import CreativeContext from "../../context/creative/creativeContext";
import SortFilter from "./Filters/SortFilter";
import CategoryFilter from "./Filters/CategoryFilter";
import SubCategoriesFilter from "./Filters/SubCategoriesFilter";

const variants = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0 }
};

const Filters = ({ showFilters, mobile }) => {
  const creativeContext = useContext(CreativeContext);
  const { resetFilters } = creativeContext;
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
        <SubCategoriesFilter
          variants={variants}
          showFilters={showFilters}
          mobile={mobile}
        />
      </div>
      <button className="reset-btn mobile" onClick={() => resetFilters()}>
        Reset
      </button>
    </div>
  );
};

export default Filters;
