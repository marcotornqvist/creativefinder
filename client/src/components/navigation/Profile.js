import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import NavigationContext from "../../context/navigation/navigationContext";
import useOutsideClick from "../../hooks/useOutsideClick";
import { motion, AnimatePresence } from "framer-motion";

const profileVariants = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0, transition: { duration: 0.3 } }
};

const Profile = () => {
  const navigationContext = useContext(NavigationContext);
  const { showProfile, toggleProfile } = navigationContext;

  const ref = useRef();

  useOutsideClick(ref, () => {
    showProfile && toggleProfile(false);
  });

  return (
    <AnimatePresence exitBeforeEnter>
      {showProfile && (
        <motion.div
          className="profile-dropdown"
          variants={profileVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          ref={ref}
        >
          <ul>
            <li onClick={() => toggleProfile(false)}>
              <Link to="/my-profile">My Profile</Link>
            </li>
            <li onClick={() => toggleProfile(false)}>
              <Link to="/settings">User Settings</Link>
            </li>
            <li onClick={() => toggleProfile(false)}>
              <Link to="/">Log Out</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Profile;
