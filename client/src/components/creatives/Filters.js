import React, { useContext } from "react";
import CreativeContext from "../../context/creative/creativeContext";

const Filters = () => {
  const creativeContext = useContext(CreativeContext);
  const {
    sort,
    setSort,
    fields
    // filters,
    // setFilter,
    // removeFilter
  } = creativeContext;

  fields.sort();

  //

  return (
    <div className="filters">
      <div className="selections">
        <div className="sort">
          <label>Sub Categories</label>
          <select onChange={e => setSort(e.target.value)} value={sort}>
            <option value="Recent">Recent</option>
            <option value="Popular">Popular</option>
            <option value="Random">Random</option>
          </select>
        </div>
        <div className="categories">
          {/* <select onChange={e => setCategory(e.target.value)} value={category}> */}
          <label>Categories</label>
          <select>
            <option value="Recent">Recent</option>
            <option value="Popular">Popular</option>
            <option value="Random">Random</option>
          </select>
        </div>
        <div className="sub-categories">
          <label>Sub Categories</label>
          <select
          // onChange={e => setSubCategory(e.target.value)}
          // value={subCategory}
          >
            <option value="Recent">Recent</option>
            <option value="Popular">Popular</option>
            <option value="Random">Random</option>
          </select>
        </div>
      </div>
      {/* <div className="filter-items">
        <h2>Filtered Items</h2>
        {filters.map((item, index) => (
          <div
            className="filter-item"
            key={index}
            onClick={() => removeFilter(item)}
          >
            {item}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Filters;
