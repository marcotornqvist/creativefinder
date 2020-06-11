import React, { useContext, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import ViewportContext from "../context/viewport/viewportContext";
import NavigationContext from "../context/navigation/navigationContext";
import Search from "../components/navigation/Search";
import Messages from "../components/navigation/Messages";
import Profile from "../components/navigation/Profile";
import Sidenav from "../components/navigation/Sidenav";

const Navbar = () => {
  let location = useLocation();
  const authContext = useContext(AuthContext);
  const navigationContext = useContext(NavigationContext);
  const viewportContext = useContext(ViewportContext);
  const { isAuthenticated } = authContext;
  const {
    showSearch,
    showMessages,
    showProfile,
    showSidenav,
    toggleSearch,
    toggleMessages,
    toggleProfile,
    toggleSidenav
  } = navigationContext;
  const { width, breakpoint } = viewportContext;

  const Desktop = (
    <Fragment>
      <Link className="branding" to="/">
        Creativefinder
      </Link>
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
            onClick={() => toggleMessages(!showMessages)}
          >
            <i className="fas fa-bell"></i>
          </div>
          {location.pathname !== "/search" && (
            <div className="icon-box" onClick={() => toggleSearch(!showSearch)}>
              <i className="fas fa-search"></i>
            </div>
          )}
          <img
            onClick={() => toggleProfile(!showProfile)}
            src="https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
            alt="profile"
          />
        </div>
      </div>
      <Search />
      <Messages />
      <Profile />
    </Fragment>
  );

  const Mobile = (
    <Fragment>
      <i
        className="fas fa-bell"
        onClick={() => toggleMessages(!showMessages)}
      ></i>
      <Link className="branding" to="/">
        Creativefinder
      </Link>
      <i
        className="fas fa-bars"
        onClick={() => toggleSidenav(!showSidenav)}
      ></i>
      <Messages />
      <Sidenav />
    </Fragment>
  );

  const GuestDesktop = (
    <Fragment>
      <Link className="branding" to="/">
        Creativefinder
      </Link>
      <div className="menu">
        <ul className="links">
          <li className="link-item">
            <Link to="/log-in">Log In</Link>
          </li>
          <li className="link-item">
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  const GuestMobile = (
    <Fragment>
      <Link className="branding" to="/">
        Creativefinder
      </Link>
      <div className="menu">
        <i
          className="fas fa-bars"
          onClick={() => toggleSidenav(!showSidenav)}
        ></i>
      </div>
      <Sidenav />
    </Fragment>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {isAuthenticated
          ? width < breakpoint
            ? Mobile
            : Desktop
          : width < breakpoint
          ? GuestMobile
          : GuestDesktop}
      </div>
    </nav>
  );
};

export default Navbar;
