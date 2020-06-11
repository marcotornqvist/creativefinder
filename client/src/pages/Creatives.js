import React, { useState, useEffect, useContext, Fragment } from "react";
import Filters from "../components/creatives/Filters";
import Topbar from "../components/creatives/Topbar";
import Categories from "../components/creatives/Categories";
import CreativeContext from "../context/creative/creativeContext";
import ViewportContext from "../context/viewport/viewportContext";

const Creatives = () => {
  const creativeContext = useContext(CreativeContext);
  const viewportContext = useContext(ViewportContext);
  const { category } = creativeContext;
  const { width, breakpoint } = viewportContext;
  const [showFilters, setShowFilters] = useState(false);
  const [layout, setLayout] = useState(false);
  console.log(category);

  useEffect(() => {
    if (width < breakpoint) {
      setLayout(false);
    }
  }, [width, breakpoint]);

  return (
    <div className="container">
      <div className="creatives">
        {width < breakpoint ? (
          <Fragment>
            <Topbar
              setShowFilters={() => setShowFilters(!showFilters)}
              showFilters={showFilters}
              mobile={true}
            />
            {showFilters && <Filters mobile={true} showFilters={showFilters} />}
          </Fragment>
        ) : (
          <Fragment>
            <Topbar
              showFilters={showFilters}
              mobile={false}
              layout={layout}
              setLayout={layout => setLayout(layout)}
            />
            <Filters mobile={false} />
          </Fragment>
        )}
        <Categories layout={layout} />
      </div>
    </div>
  );
};

export default Creatives;
