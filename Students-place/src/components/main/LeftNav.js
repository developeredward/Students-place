import React from "react";

const LeftNav = () => {
  return (
    <div className="left-nav-links">
      <div className="user-interest-details">
        <ul className="interests">
          <li>Trending 24hrs</li>
          <li>Favorites</li>
        </ul>
      </div>
      <div className="blog-navigations">
        <div className="title">
          <h3>POPULAR</h3>
        </div>
        <div className="navigation">
          <ul>
            <li>Opportunities</li>
            <li>Technology</li>
            <li>Students Library</li>
            <li>Entertainment</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
