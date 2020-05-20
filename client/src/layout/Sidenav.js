import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import CreativeContext from "../context/creative/creativeContext";
import ViewportContext from "../context/viewport/viewportContext";
import Search from "../components/navigation/Search";

const Sidenav = () => {
  const creativeContext = useContext(CreativeContext);
  const viewportContext = useContext(ViewportContext);
  const {
    sidenavOpen,
    searchText,
    toggleSidenav,
    isAuthenticated
  } = creativeContext;
  const { width, breakpoint } = viewportContext;

  const userLinks = (
    <ul className="sidebar-links">
      <li>
        <Link to="/creatives" onClick={toggleSidenav}>
          Find Creatives
        </Link>
      </li>
      <li>
        <Link to="/forum" onClick={toggleSidenav}>
          Community
        </Link>
      </li>
      <li>
        <Link to="/my-profile" onClick={toggleSidenav}>
          My Profile
        </Link>
      </li>
      <li>
        <Link to="/settings" onClick={toggleSidenav}>
          User Settings
        </Link>
      </li>
      <li>
        <Link to="/" onClick={toggleSidenav}>
          Log Out
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="sidebar-links">
      <li>
        <Link to="/creatives" onClick={toggleSidenav}>
          Find Creatives
        </Link>
      </li>
      <li>
        <Link to="/forum" onClick={toggleSidenav}>
          Community
        </Link>
      </li>
      <li>
        <Link to="/log-in" onClick={toggleSidenav}>
          Log In
        </Link>
      </li>
      <li>
        <Link to="/sign-up" onClick={toggleSidenav}>
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
