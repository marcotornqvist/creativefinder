import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import NavigationContext from "../context/navigation/navigationContext";
import ViewportContext from "../context/viewport/viewportContext";
import Search from "../components/navigation/Search";

const Sidenav = () => {
  const authContext = useContext(AuthContext);
  const navigationContext = useContext(NavigationContext);
  const viewportContext = useContext(ViewportContext);
  const { isAuthenticated } = authContext;
  const { sidenavOpen, searchText, toggleSidenav } = navigationContext;
  const { width, breakpoint } = viewportContext;

  const userLinks = (
    <ul className="sidebar-links">
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
        <Link to="/" onClick={() => toggleSidenav(false)}>
          Log Out
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="sidebar-links">
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
    </ul>
  );

  return (
    <Fragment>
      {width < breakpoint && (
        <div className={`sidenav${sidenavOpen ? " active" : ""}`}>
          <div className="sidenav-container">
            <Search />
            {searchText === "" && (isAuthenticated ? userLinks : guestLinks)}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Sidenav;
