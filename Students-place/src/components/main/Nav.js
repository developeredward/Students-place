import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";

const Nav = (props) => {
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
            <div className="auth-description">
              {props.isAuthenticated ? (
                // <button className="login-btn" onClick={props.logout}>
                //   {" "}
                //   Logout{" "}
                // </button>
                <div className="auth-user-credentials-container">
                  <div className="user-profile-pic">
                    {props.userImage ? (
                      <img
                        src={props.userImage}
                        className="profile-img"
                        alt=""
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="profile-img"
                        icon={solid.faUserCircle}
                      />
                    )}
                  </div>
                  <div className="auth-user-nav-actions">
                    <div className="linker"></div>
                    <div className="profile-img">
                      {props.userImage ? (
                        <img src={props.userImage} className="img" alt="" />
                      ) : (
                        <FontAwesomeIcon
                          className="img"
                          icon={solid.faUserCircle}
                        />
                      )}
                    </div>
                    <div className="auth-user-names">
                      <h4>{props.fullname}</h4>
                      <span className="username">{props.username}</span>
                    </div>
                    <div className="actions">
                      <div className="action">
                        <div className="action-icon">
                          <FontAwesomeIcon icon={regular.faLightbulb} />
                        </div>
                        <span id="description">Dark mode</span>
                      </div>
                      <div className="action">
                        <div className="action-icon">
                          <FontAwesomeIcon icon={solid.faWrench} />
                        </div>
                        <span id="description">Settings</span>
                      </div>
                      <div className="action" onClick={props.logout}>
                        <div className="action-icon">
                          <FontAwesomeIcon icon={solid.faSignOutAlt} />
                        </div>
                        <span id="description">Signout</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="/login/">
                  <button className="login-btn"> Sign In </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    fullname: state.fullname,
    username: state.username,
    userImage: state.picture,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
