import React from "react";

import test from "../../static/img/test.jpg";

const RightNav = () => {
  return (
    <div className="right-nav-links">
      <div className="first-section">
        <div className="heading">
          <h2>Trending</h2>
        </div>
        <div className="trend-post-container">
          <div className="trend-post">
            <span>#aunScholarship</span>
          </div>
          <div className="trend-post">
            <span>#korenan</span>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="blog-container">
          <div className="title">
            <h3 className="blogs-title">Latest News</h3>
          </div>
          <div className="blog-posts">
            <div className="post">
              <div className="img-container">
                <img src={test} alt="" />
              </div>
              <div className="text">
                <div className="post-overview">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus, rem?
                  </p>
                </div>
              </div>
            </div>
            <div className="post">
              <div className="img-container">
                <img src={test} alt="" />
              </div>
              <div className="text">
                <div className="post-overview">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus, rem?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
