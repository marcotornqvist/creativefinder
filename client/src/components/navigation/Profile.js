import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useOutsideClick from "../../hooks/useOutsideClick";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import { motion, AnimatePresence } from "framer-motion";

const profileVariants = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0, transition: { duration: 0.3 } }
};

const Profile = ({ showProfile, setShowProfile }) => {
  const ref = useRef();

  useOutsideClick(ref, () => {
    showProfile && setShowProfile(false);
  });

  useLockBodyScroll(showProfile);

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
            <li onClick={() => setShowProfile(false)}>
              <Link to="/my-profile">My Profile</Link>
            </li>
            <li onClick={() => setShowProfile(false)}>
              <Link to="/settings">User Settings</Link>
            </li>
            <li onClick={() => setShowProfile(false)}>
              <Link to="/">Log Out</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Profile;
