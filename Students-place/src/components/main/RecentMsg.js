import React from "react";
import user from "../../static/img/icons/avatar.png";

const RecentMsg = () => {
  return (
    <div className="recent-messages">
      <div className="message-container">
        <div className="messages">
          <div className="profile-img-container">
            <img src={user} alt="" />
          </div>
          <div className="profile-img-container">
            <img src={user} alt="" />
          </div>
          <div className="profile-img-container">
            <img src={user} alt="" />
          </div>
          <div className="profile-img-container">
            <img src={user} alt="" />
          </div>
          <div className="profile-img-container">
            <img src={user} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentMsg;
