import React, { useState, useContext } from "react";
import Filters from "../components/creatives/Filters";
import Categories from "../components/creatives/Categories";
import CreativeContext from "../context/creative/creativeContext";
import ViewportContext from "../context/viewport/viewportContext";

const Creatives = () => {
  const creativeContext = useContext(CreativeContext);
  const viewportContext = useContext(ViewportContext);
  const { category } = creativeContext;
  const { width } = viewportContext;
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="container">
      <div className="creatives">
        <div className="top-bar">
          <h2>{category ? category : "Categories"}</h2>
          <button onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? "Close Filters" : "Show Filters"}
          </button>
        </div>
        {width < 480 ? (
          showFilters && <Filters mobile={true} showFilters={showFilters} />
        ) : (
          <Filters mobile={false} />
        )}
        <Categories />
      </div>
    </div>
  );
};

export default Creatives;
