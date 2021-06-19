import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import Logo from "../../static/img/steam.png";

const Nav = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="nav-links">
          <li className="nav-link">Home</li>
          <li className="nav-link">Feeds</li>
          <li className="nav-link">Announcements</li>
        </ul>
        <div className="authentication-links">
          <div className="search">
            <FontAwesomeIcon icon={solid.faSearch} className="search-btn" />
          </div>
          <div className="notification">
            <FontAwesomeIcon
              icon={regular.faBell}
              className="notification-btn"
            />
          </div>
          <div className="auth-user">
            <div className="login">
              {" "}
              <button className="login-btn"> Login </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
