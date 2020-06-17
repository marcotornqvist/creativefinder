import React, { useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import ViewportContext from "../context/viewport/viewportContext";
import Search from "../components/navigation/Search";
import Messages from "../components/navigation/Messages";
import Profile from "../components/navigation/Profile";
import Sidenav from "../components/navigation/Sidenav";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const viewportContext = useContext(ViewportContext);
  const { isAuthenticated } = authContext;
  const { width, breakpoint } = viewportContext;

  const [showSearch, setShowSearch] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSidenav, setShowSidenav] = useState(false);

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
            onClick={() => setShowMessages(!showMessages)}
          >
            <i className="fas fa-bell"></i>
          </div>
          <div className="icon-box" onClick={() => setShowSearch(!showSearch)}>
            <i className="fas fa-search"></i>
          </div>
          <img
            onClick={() => setShowProfile(!showProfile)}
            src="https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
            alt="profile"
          />
        </div>
      </div>
      <Search
        setShowSearch={showSearch => setShowSearch(showSearch)}
        showSearch={showSearch}
      />
      <Messages
        setShowMessages={showMessages => setShowMessages(showMessages)}
        showMessages={showMessages}
      />
      <Profile
        setShowProfile={showProfile => setShowProfile(showProfile)}
        showProfile={showProfile}
      />
    </Fragment>
  );

  const Mobile = (
    <Fragment>
      <i
        className="fas fa-bell"
        onClick={() => setShowMessages(!showMessages)}
      ></i>
      <Link className="branding" to="/">
        Creativefinder
      </Link>
      <i
        className="fas fa-bars"
        onClick={() => setShowSidenav(!showSidenav)}
      ></i>
      <Messages
        setShowMessages={showMessages => setShowMessages(showMessages)}
        showMessages={showMessages}
      />
      <Sidenav
        setShowSidenav={showSidenav => setShowSidenav(showSidenav)}
        showSidenav={showSidenav}
      />
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
          onClick={() => setShowSidenav(!showSidenav)}
        ></i>
      </div>
      <Sidenav
        setShowSidenav={showSidenav => setShowSidenav(showSidenav)}
        showSidenav={showSidenav}
      />
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
