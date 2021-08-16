import React from "react";
import "../static/css/loading.css";
const Loading = (props) => {
  return (
    <div className="loading-container">
      <div className="loading"></div>
      <div className="loading-text">
        <h3>{props.text}</h3>
      </div>
    </div>
  );
};

export default Loading;
