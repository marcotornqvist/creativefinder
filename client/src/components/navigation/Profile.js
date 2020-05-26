import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import NavigationContext from "../../context/navigation/navigationContext";
import useOutsideClick from "../../hooks/useOutsideClick";

const Profile = () => {
  const navigationContext = useContext(NavigationContext);
  const { toggleProfile } = navigationContext;

  const ref = useRef();

  useOutsideClick(ref, () => {
    toggleProfile(false);
  });

  return (
    <div className="profile-dropdown" ref={ref}>
      <ul>
        <li>
          <Link to="/my-profile">My Profile</Link>
        </li>
        <li>
          <Link to="/settings">User Settings</Link>
        </li>
        <li>
          <Link to="/">Log Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
