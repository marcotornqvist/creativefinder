import React, { useContext, useRef, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import NavigationContext from "../../context/navigation/navigationContext";
import useOutsideClick from "../../hooks/useOutsideClick";

const MobileMenu = () => {
  const authContext = useContext(AuthContext);
  const navigationContext = useContext(NavigationContext);
  const { isAuthenticated } = authContext;
  const { toggleMobileMenu } = navigationContext;

  const ref = useRef();

  useOutsideClick(ref, () => {
    toggleMobileMenu(false);
  });

  const userLinks = (
    <Fragment>
      <li>
        <Link to="/creatives" onClick={() => toggleMobileMenu(false)}>
          Find Creatives
        </Link>
      </li>
      <li>
        <Link to="/forum" onClick={() => toggleMobileMenu(false)}>
          Community
        </Link>
      </li>
      <li>
        <Link to="/my-profile" onClick={() => toggleMobileMenu(false)}>
          My Profile
        </Link>
      </li>
      <li>
        <Link to="/settings" onClick={() => toggleMobileMenu(false)}>
          User Settings
        </Link>
      </li>
      <li>
        <Link to="/search" onClick={() => toggleMobileMenu(false)}>
          Search
        </Link>
      </li>
      <li>
        <Link to="/" onClick={() => toggleMobileMenu(false)}>
          Log Out
        </Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/creatives" onClick={() => toggleMobileMenu(false)}>
          Find Creatives
        </Link>
      </li>
      <li>
        <Link to="/forum" onClick={() => toggleMobileMenu(false)}>
          Community
        </Link>
      </li>
      <li>
        <Link to="/log-in" onClick={() => toggleMobileMenu(false)}>
          Log In
        </Link>
      </li>
      <li>
        <Link to="/sign-up" onClick={() => toggleMobileMenu(false)}>
          Sign Up
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className="mobile-menu" ref={ref}>
      <ul>{isAuthenticated ? userLinks : guestLinks}</ul>
      <div className="bottom-shadow"></div>
    </div>
  );
};

export default MobileMenu;
