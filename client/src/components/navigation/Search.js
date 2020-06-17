import React, { useContext, useRef } from "react";
import CreativeContext from "../../context/creative/creativeContext";
import Results from "./Results";
import useOutsideClick from "../../hooks/useOutsideClick";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import { motion, AnimatePresence } from "framer-motion";

const searchVariants = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0, transition: { duration: 0.3 } }
};

const Search = ({ showSearch, setShowSearch }) => {
  const creativeContext = useContext(CreativeContext);
  const { searchText, setSearchText } = creativeContext;

  useLockBodyScroll(showSearch);

  const ref = useRef();

  useOutsideClick(ref, () => {
    showSearch && setShowSearch(false);
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
          <Results
            showSearch={showSearch}
            setShowSearch={showSearch => setShowSearch(showSearch)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Search;
