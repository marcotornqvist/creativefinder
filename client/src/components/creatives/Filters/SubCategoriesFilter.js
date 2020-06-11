import React, { useState, useEffect, useContext } from "react";
import CreativeContext from "../../../context/creative/creativeContext";
import { motion, AnimatePresence } from "framer-motion";

const SubCategoriesFilter = ({ variants, showFilters, mobile }) => {
  const creativeContext = useContext(CreativeContext);
  const { subCategories, setSubCategories, category } = creativeContext;
  const [dropdown, setDropdown] = useState(true);

  useEffect(() => {
    if (mobile && showFilters) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  }, [mobile, showFilters]);

  // console.log(subCategories);

  return (
    <div className="sub-categories dropdown">
      <div className="menu-button" onClick={() => setDropdown(!dropdown)}>
        <span>Sub Categories</span>
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
            {category !== null ? (
              <ul>
                {category.sub.map((item, index) => (
                  <li key={index}>
                    <div className="content">
                      <div
                        className={`box${
                          subCategories.includes(item) ? " selected" : ""
                        }`}
                        onClick={() => setSubCategories(item)}
                      >
                        <i className="fas fa-check"></i>
                      </div>
                      <span onClick={() => setSubCategories(item)}>{item}</span>
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

export default SubCategoriesFilter;
