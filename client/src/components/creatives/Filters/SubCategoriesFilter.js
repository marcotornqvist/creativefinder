import React, { useState, useEffect, useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CreativeContext from "../../../context/creative/creativeContext";
import useOutsideClick from "../../../hooks/useOutsideClick";

const SubcategoriesFilter = ({ variants, showFilters, mobile }) => {
  const creativeContext = useContext(CreativeContext);
  const { subcategories, setSubcategories, category } = creativeContext;
  const [dropdown, setDropdown] = useState(true);

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
    <div className="subcategories dropdown">
      <div className="menu-button" onClick={() => setDropdown(!dropdown)}>
        <span>Subcategories</span>
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
            {category !== null ? (
              <ul>
                {category.sub.map((item, index) => (
                  <li key={index}>
                    <div className="content">
                      <div
                        className={`box${
                          subcategories.includes(item) ? " selected" : ""
                        }`}
                        onClick={() => setSubcategories(item)}
                      >
                        <i className="fas fa-check"></i>
                      </div>
                      <span onClick={() => setSubcategories(item)}>{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Category Selected</h3>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubcategoriesFilter;
