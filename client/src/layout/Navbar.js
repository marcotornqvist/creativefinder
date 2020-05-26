import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import NavigationContext from "../context/navigation/navigationContext";
import ViewportContext from "../context/viewport/viewportContext";
import Search from "../components/navigation/Search";
import Messages from "../components/navigation/Messages";
import Profile from "../components/navigation/Profile";
import MobileMenu from "../components/navigation/MobileMenu";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const navigationContext = useContext(NavigationContext);
  const viewportContext = useContext(ViewportContext);
  const { isAuthenticated } = authContext;
  const {
    toggleMobileMenu,
    toggleSearch,
    toggleMessages,
    toggleProfile,
    mobileMenuOpen,
    searchOpen,
    messagesOpen,
    profileOpen
  } = navigationContext;
  const { width, breakpoint } = viewportContext;

  const Desktop = (
    <Fragment>
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
          <div
            className="icon-box"
            onClick={e => toggleSearch(!mobileMenuOpen)}
          >
            <i className="fas fa-search"></i>
          </div>
          <img
            onClick={e => toggleProfile(!profileOpen)}
            src="https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
            alt="profile"
          />
        </div>
      </div>
      {searchOpen && <Search />}
      {messagesOpen && <Messages />}
      {profileOpen && <Profile />}
    </Fragment>
  );

  const Mobile = (
    <Fragment>
      <i
        className="fas fa-bell"
        onClick={e => toggleMessages(!messagesOpen)}
      ></i>
      <h2 className="branding">
        <Link to="/creatives">Creativefinder</Link>
      </h2>
      <i className="fas fa-bars" onClick={e => toggleMobileMenu(true)}></i>
      {messagesOpen && <Messages />}
      {mobileMenuOpen && <MobileMenu />}
    </Fragment>
  );

  const GuestDesktop = (
    <Fragment>
      <h2 className="branding">
        <Link to="/">Creativefinder</Link>
      </h2>
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
      <h2 className="branding">
        <Link to="/">Creativefinder</Link>
      </h2>
      <div className="menu">
        <i className="fas fa-bars" onClick={e => toggleMobileMenu(true)}></i>
      </div>
      {mobileMenuOpen && <MobileMenu />}
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
