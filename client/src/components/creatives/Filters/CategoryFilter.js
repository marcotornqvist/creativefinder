import React, { useState, useEffect, useContext } from "react";
import CreativeContext from "../../../context/creative/creativeContext";
import { motion, AnimatePresence } from "framer-motion";

const CategoryFilter = ({ variants, showFilters, mobile }) => {
  const creativeContext = useContext(CreativeContext);
  const { category, setCategory, categories } = creativeContext;
  const [dropdown, setDropdown] = useState(false);

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
