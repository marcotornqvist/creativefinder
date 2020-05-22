import React, { useContext, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import NavigationContext from "../context/navigation/navigationContext";
import ViewportContext from "../context/viewport/viewportContext";
import Search from "../components/navigation/Search";
import Messages from "../components/navigation/Messages";
import ProfileDropdown from "../components/navigation/ProfileDropdown";

const Navbar = () => {
  let location = useLocation();
  const authContext = useContext(AuthContext);
  const navigationContext = useContext(NavigationContext);
  const viewportContext = useContext(ViewportContext);
  const { isAuthenticated } = authContext;
  const {
    toggleSidenav,
    toggleSearch,
    toggleMessages,
    toggleProfileDropdown,
    searchOpen,
    messagesOpen,
    profileDropdownOpen,
    sidenavOpen
  } = navigationContext;
  const { width, breakpoint } = viewportContext;

  const Desktop = (
    <Fragment>
      <div className="navbar-container">
        <h2 className="branding">
          <Link to="/creatives">Creativefinder</Link>
        </h2>
        <div className="menu">
          <ul className="links">
            <li className="link-item">
              <Link to="/creatives">Find Creatives</Link>
            </li>
            <li className="link-item">
              <Link to="/forum">Community</Link>
            </li>
          </ul>
          <div className="dropdown-icons">
            <div
              className="icon-box"
              onClick={e => toggleMessages(!messagesOpen)}
            >
              <i className="fas fa-bell"></i>
            </div>
            <div className="icon-box" onClick={e => toggleSearch(!searchOpen)}>
              <i className="fas fa-search"></i>
            </div>
            <img
              onClick={e => toggleProfileDropdown(!profileDropdownOpen)}
              src="https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
              alt="profile"
            />
          </div>
        </div>
      </div>
      {searchOpen && <Search />}
      {messagesOpen && <Messages />}
      {profileDropdownOpen && <ProfileDropdown />}
    </Fragment>
  );

  const Mobile = (
    <Fragment>
      <div className="navbar-container">
        <i
          className="fas fa-bell"
          onClick={e => toggleMessages(!messagesOpen)}
        ></i>
        <h2 className="branding">
          <Link to="/creatives">Creativefinder</Link>
        </h2>
        <i
          className="fas fa-bars"
          onClick={() => toggleSidenav(!sidenavOpen)}
        ></i>
      </div>
      {messagesOpen && <Messages />}
    </Fragment>
  );

  const GuestDesktop = (
    <Fragment>
      <div className="navbar-container">
        <h2 className="branding">
          <Link to="/">Creativefinder</Link>
        </h2>
        <ul className="links">
          <li className="link-item">
            <Link to="/log-in">Log In</Link>
          </li>
          <li className="link-item">
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </div>
      {searchOpen && <Search />}
    </Fragment>
  );

  const GuestMobile = (
    <Fragment>
      <div className="navbar-container">
        <h2 className="branding">
          <Link to="/">Creativefinder</Link>
        </h2>
        <i
          className="fas fa-bars"
          onClick={() => toggleSidenav(!sidenavOpen)}
        ></i>
      </div>
    </Fragment>
  );

  return (
    <nav
      className={`navbar${width < breakpoint && sidenavOpen ? " active" : ""}`}
      id={location.pathname === "/" ? "transparent-bg" : ""}
    >
      {isAuthenticated
        ? width < breakpoint
          ? Mobile
          : Desktop
        : width < breakpoint
        ? GuestMobile
        : GuestDesktop}
    </nav>
  );
};

export default Navbar;
