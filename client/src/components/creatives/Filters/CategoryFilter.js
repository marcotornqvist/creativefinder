import React, { useState, useEffect, useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CreativeContext from "../../../context/creative/creativeContext";
import useOutsideClick from "../../../hooks/useOutsideClick";

const CategoryFilter = ({ variants, showFilters, mobile }) => {
  const creativeContext = useContext(CreativeContext);
  const { category, setCategory, categories } = creativeContext;
  const [dropdown, setDropdown] = useState(false);

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
    <div className="categories dropdown">
      <div className="menu-button" onClick={() => setDropdown(!dropdown)}>
        <span>Categories</span>
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
              {categories.map(item => (
                <li key={item.id}>
                  <div className="content">
                    <div
                      className={`box${
                        category !== null && category.id === item.id
                          ? " selected"
                          : ""
                      }`}
                      onClick={() => setCategory(item)}
                    >
                      <i className="fas fa-check"></i>
                    </div>
                    <span onClick={() => setCategory(item)}>{item.name}</span>
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

export default CategoryFilter;
