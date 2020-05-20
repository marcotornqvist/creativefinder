import React, { useContext, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import CreativeContext from "../context/creative/creativeContext";
import ViewportContext from "../context/viewport/viewportContext";
import Search from "../components/navigation/Search";
import Messages from "../components/navigation/Messages";
import ProfileDropdown from "../components/navigation/ProfileDropdown";

const Navbar = () => {
  let location = useLocation();
  const creativeContext = useContext(CreativeContext);
  const viewportContext = useContext(ViewportContext);
  const {
    toggleSidenav,
    toggleSearch,
    togglemessages,
    toggleProfileDropdown,
    searchOpen,
    messagesOpen,
    profileDropdownOpen,
    isAuthenticated
  } = creativeContext;
  const { width, breakpoint } = viewportContext;

  const Desktop = (
    <Fragment>
      <div className="navbar-container">
        <h2 className="branding">
          <Link to="/creatives">Creativefinder</Link>
        </h2>
        <ul className="links">
          <li className="link-item">
            <Link to="/creatives">Find Creatives</Link>
          </li>
          <li className="link-item">
            <Link to="/forum">Community</Link>
          </li>
        </ul>
        <div className="buttons">
          <i
            className="fas fa-bell"
            onClick={e => togglemessages(!messagesOpen)}
          ></i>
          <i
            className="fas fa-search"
            onClick={e => toggleSearch(!searchOpen)}
          ></i>
          <div className="my-profile">
            <span>
              <Link to="/my-profile">Denzel Curry</Link>
            </span>
            <img
              onClick={e => toggleProfileDropdown(!profileDropdownOpen)}
              src="https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
              alt="profile"
            />
          </div>
        </div>
      </div>
      {searchOpen && <Search />}
      {messagesOpen && isAuthenticated && <Messages />}
      {profileDropdownOpen && isAuthenticated && <ProfileDropdown />}
    </Fragment>
  );

  const Mobile = (
    <Fragment>
      <div className="navbar-container">
        <i
          className="fas fa-bell"
          onClick={e => togglemessages(!messagesOpen)}
        ></i>
        <h2 className="branding">
          <Link to="/creatives">Creativefinder</Link>
        </h2>
        <i className="fas fa-bars" onClick={toggleSidenav}></i>
      </div>
      {messagesOpen && isAuthenticated && <Messages />}
    </Fragment>
  );

  const GuestDesktop = (
    <Fragment>
      <div className="navbar-container">
        <h2 className="branding">
          <Link to="/">Creativefinder</Link>
        </h2>
        <ul className="auth-links">
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
        <i className="fas fa-bars" onClick={toggleSidenav}></i>
      </div>
    </Fragment>
  );

  return (
    <nav
      className={`navbar${location.pathname === "/" ? " transparent-bg" : ""}`}
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
