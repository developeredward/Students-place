import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";

const Nav = () => {
  const handleNav = () => {
    let leftNav = document.querySelector(".left-nav-links");
    let menu = document.querySelector(".menu");
    let hideMeunu = document.querySelector(".hidden-proof");
    leftNav.classList.toggle("hide-left-nav");
    hideMeunu.classList.toggle("hidden");
  };
  return (
    <header className="header">
      <nav>
        <div className="left-nav-controller">
          <div onClick={handleNav} className="menu">
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar hidden-proof"></div>
          </div>
        </div>
        <div className="logo">
          <h1>STUDENTS PLACE</h1>
        </div>

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
