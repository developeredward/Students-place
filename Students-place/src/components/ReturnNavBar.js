import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import "../static/css/returnnavbar.css";

const ReturnNavBar = (props) => {
  const history = useHistory();

  return (
    <div className="top-return-nav" style={props.style}>
      <div className="go-back">
        <button
          onClick={() => {
            history.go(-1);
          }}
        >
          <FontAwesomeIcon size="2x" icon={regular.faArrowAltCircleLeft} />
        </button>
      </div>
      <div className="username-fullname">{props.text}</div>
      <div className="options">
        <div className="menu">
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <div className="menu-bar hidden-proof"></div>
        </div>{" "}
      </div>
    </div>
  );
};

export default ReturnNavBar;
