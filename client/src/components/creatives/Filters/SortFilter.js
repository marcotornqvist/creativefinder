import React, { useState, useEffect, useContext } from "react";
import CreativeContext from "../../../context/creative/creativeContext";
import { motion, AnimatePresence } from "framer-motion";

const SortFilter = ({ variants, showFilters, mobile }) => {
  const creativeContext = useContext(CreativeContext);
  const { setSort, sort } = creativeContext;

  const [dropdown, setDropdown] = useState(true);
  const sortItems = ["Recent", "Popular", "Random"];

  useEffect(() => {
    if (mobile && showFilters) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  }, [mobile, showFilters]);

  return (
    <div className="sort dropdown">
      <div className="menu-button" onClick={() => setDropdown(!dropdown)}>
        <span>Sort</span>
        <motion.i
          className="fas fa-angle-down"
          animate={{ rotate: dropdown ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        ></motion.i>
      </div>
      <AnimatePresence>
        {dropdown && (
          <motion.div
            className="menu"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0 } }}
          >
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
                    <span onClick={() => setSort(item)}>{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SortFilter;
