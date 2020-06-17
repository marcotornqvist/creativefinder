import React, { useState, useEffect, useContext, Fragment } from "react";
import Filters from "../components/creatives/Filters";
import Topbar from "../components/creatives/Topbar";
import Profiles from "../components/creatives/Profiles";
import ProfileModal from "../components/creatives/Profiles/ProfileModal";
import ViewportContext from "../context/viewport/viewportContext";

const Creatives = () => {
  const viewportContext = useContext(ViewportContext);
  const { width, breakpoint } = viewportContext;
  const [showFilters, setShowFilters] = useState(false);
  const [layout, setLayout] = useState(true);

  useEffect(() => {
    if (width < breakpoint) {
      setLayout(false);
    } else {
      setShowFilters(false);
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
        <Profiles layout={layout} showFilters={showFilters} />
        <ProfileModal />
      </div>
    </div>
  );
};

export default Creatives;
