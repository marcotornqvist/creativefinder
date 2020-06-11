import React, { useContext, useRef } from "react";
import NavigationContext from "../../context/navigation/navigationContext";
import Results from "./Results";
import useOutsideClick from "../../hooks/useOutsideClick";
import { motion, AnimatePresence } from "framer-motion";

const searchVariants = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0, transition: { duration: 0.3 } }
};

const Search = () => {
  const navigationContext = useContext(NavigationContext);
  const {
    showSearch,
    toggleSearch,
    searchText,
    setSearchText
  } = navigationContext;

  const ref = useRef();

  useOutsideClick(ref, () => {
    showSearch && toggleSearch(false);
  });

  return (
    <AnimatePresence exitBeforeEnter>
      {showSearch && (
        <motion.div
          className="search"
          variants={searchVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          ref={ref}
        >
          <form className="search-form">
            <div className="search-icon">
              <i className="fas fa-search"></i>
            </div>
            <input
              type="text"
              value={searchText}
              placeholder="Search Profile"
              onChange={e => setSearchText(e.target.value)}
            />
          </form>
          <Results />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Search;
