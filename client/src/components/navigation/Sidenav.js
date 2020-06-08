import React, { useContext, Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import NavigationContext from "../../context/navigation/navigationContext";
import useOutsideClick from "../../hooks/useOutsideClick";

const Sidenav = () => {
  const authContext = useContext(AuthContext);
  const navigationContext = useContext(NavigationContext);
  const { isAuthenticated } = authContext;
  const { toggleSidenav } = navigationContext;

  const ref = useRef();

  useOutsideClick(ref, () => {
    toggleSidenav(false);
  });

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
    <div className="sidenav" ref={ref}>
      <div className="header">
        <h2 className="branding" onClick={() => toggleSidenav(false)}>
          <Link to="/">Creativefinder</Link>
        </h2>
        <i className="fas fa-times" onClick={() => toggleSidenav(false)}></i>
      </div>
      <ul>{isAuthenticated ? userLinks : guestLinks}</ul>
    </div>
  );
};

export default Sidenav;
