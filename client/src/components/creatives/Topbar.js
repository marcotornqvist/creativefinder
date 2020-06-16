import React, { useContext, Fragment } from "react";
import { motion } from "framer-motion";
import CreativeContext from "../../context/creative/creativeContext";

const Topbar = ({ showFilters, setShowFilters, layout, setLayout, mobile }) => {
  const creativeContext = useContext(CreativeContext);
  const { resetFilters } = creativeContext;
  return (
    <div className="top-bar">
      {mobile ? (
        <motion.button
          onClick={() => setShowFilters()}
          className={`open-filters${showFilters ? " open" : ""}`}
        >
          {showFilters ? "Close Filters" : "Show Filters"}
        </motion.button>
      ) : (
        <Fragment>
          <h2>Filters</h2>
          <div className="buttons">
            <button
              className="reset-btn desktop"
              onClick={() => resetFilters()}
            >
              Reset
            </button>
            <div className="layout-buttons">
              <div
                className={`box${layout ? " selected" : ""}`}
                onClick={() => setLayout(true)}
              >
                <i className="fas fa-th-large"></i>
              </div>
              <div
                className={`box${!layout ? " selected" : ""}`}
                onClick={() => setLayout(false)}
              >
                <i className="fas fa-grip-lines"></i>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Topbar;
