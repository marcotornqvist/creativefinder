import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AuthContext from "../../context/auth/authContext";
import NavigationContext from "../../context/navigation/navigationContext";

const backdrop = {
  visible: { opacity: 1, transition: { duration: 0.5, type: "tween" } },
  hidden: { opacity: 0, transition: { duration: 0.5, type: "tween" } }
};

const sidenav = {
  hidden: {
    x: "786px",
    opacity: 0,
    transition: { duration: 1, type: "tween" }
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: { duration: 0.5, type: "tween" }
  }
};

const Sidenav = () => {
  const authContext = useContext(AuthContext);
  const navigationContext = useContext(NavigationContext);
  const { isAuthenticated } = authContext;
  const { toggleSidenav, showSidenav } = navigationContext;

  const userLinks = (
    <Fragment>
      <li>
        <Link to="/creatives" onClick={() => toggleSidenav(false)}>
          Find Creatives
        </Link>
      </li>
      <li>
        <Link to="/forum" onClick={() => toggleSidenav(false)}>
          Community
        </Link>
      </li>
      <li>
        <Link to="/my-profile" onClick={() => toggleSidenav(false)}>
          My Profile
        </Link>
      </li>
      <li>
        <Link to="/settings" onClick={() => toggleSidenav(false)}>
          User Settings
        </Link>
      </li>
      <li>
        <Link to="/search" onClick={() => toggleSidenav(false)}>
          Search
        </Link>
      </li>
      <li>
        <Link to="/" onClick={() => toggleSidenav(false)}>
          Log Out
        </Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/creatives" onClick={() => toggleSidenav(false)}>
          Find Creatives
        </Link>
      </li>
      <li>
        <Link to="/forum" onClick={() => toggleSidenav(false)}>
          Community
        </Link>
      </li>
      <li>
        <Link to="/log-in" onClick={() => toggleSidenav(false)}>
          Log In
        </Link>
      </li>
      <li>
        <Link to="/sign-up" onClick={() => toggleSidenav(false)}>
          Sign Up
        </Link>
      </li>
    </Fragment>
  );

  return (
    <AnimatePresence exitBeforeEnter>
      {showSidenav && (
        <Fragment>
          <motion.div
            className="backdrop"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => toggleSidenav(false)}
          ></motion.div>
          <motion.div
            className="sidenav"
            variants={sidenav}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="header">
              <Link to="/" onClick={() => toggleSidenav(false)}>
                Creativefinder
              </Link>
              <i
                className="fas fa-times"
                onClick={() => toggleSidenav(false)}
              ></i>
            </div>
            <ul>{isAuthenticated ? userLinks : guestLinks}</ul>
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export default Sidenav;
