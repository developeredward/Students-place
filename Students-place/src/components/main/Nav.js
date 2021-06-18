import React from "react";

const Nav = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo"></div>
        <ul className="nav-links">
          <li className="nav-link">Home</li>
          <li className="nav-link">Feeds</li>
          <li className="nav-link">Trending</li>
          <li className="nav-link">Announcements</li>
        </ul>
        <div className="authentication-links">
          <div className="search"></div>
          <ul className="auth-user">
            <li className="login">Login</li>
            <li className="login">Register</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
