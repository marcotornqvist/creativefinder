import React, { useContext } from "react";
import CreativeContext from "../../context/creative/creativeContext";

const Filters = () => {
  const creativeContext = useContext(CreativeContext);
  const {
    sort,
    setSort,
    fields,
    filters,
    setFilter,
    removeFilter
  } = creativeContext;

  fields.sort();

  return (
    <div className="filters">
      <div className="sort">
        <select onChange={e => setSort(e.target.value)} value={sort}>
          <option value="Recent">Recent</option>
          <option value="Popular">Popular</option>
          <option value="Random">Random</option>
        </select>
      </div>
      <div className="unfiltered-items">
        <h2>Unfiltered Items</h2>
        {fields.map((item, index) => (
          <div
            className="filter-item"
            key={index}
            onClick={() => setFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <hr />
      <div className="filter-items">
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
      </div>
    </div>
  );
};

export default Filters;
