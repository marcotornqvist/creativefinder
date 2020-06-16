import React, { useState, useEffect, useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CreativeContext from "../../../context/creative/creativeContext";
import useOutsideClick from "../../../hooks/useOutsideClick";

const SortFilter = ({ variants, showFilters, mobile }) => {
  const creativeContext = useContext(CreativeContext);
  const { setSort, sort } = creativeContext;
  const [dropdown, setDropdown] = useState(true);
  const sortItems = ["Recent", "Popular", "Random"];

  const ref = useRef();

  useOutsideClick(ref, () => {
    !mobile && dropdown && setDropdown(false);
  });

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
            ref={ref}
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
