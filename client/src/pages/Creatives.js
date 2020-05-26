import React from "react";
import Filters from "../components/creatives/Filters";
import Categories from "../components/creatives/Categories";

const Creatives = () => {
  return (
    <div className="container">
      <div className="creatives">
        <Filters />
        <Categories />
      </div>
    </div>
  );
};

export default Creatives;
