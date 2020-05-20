import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import CreativeContext from "../../context/creative/creativeContext";
import useOutsideClick from "../../hooks/useOutsideClick";

const ProfileDropdown = () => {
  const creativeContext = useContext(CreativeContext);
  const { toggleProfileDropdown } = creativeContext;

  const ref = useRef();

  useOutsideClick(ref, () => {
    toggleProfileDropdown(false);
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

export default ProfileDropdown;
