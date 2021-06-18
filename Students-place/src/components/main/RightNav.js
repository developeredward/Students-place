import React from "react";

const RightNav = () => {
  return (
    <div className="right-nav-links">
      <div className="first-section">
        <div className="heading">Trending</div>
        <div className="trend-post-container">
          <div className="trend-post">
            <div className="user">
              <h3>Mary Jane</h3>
            </div>
            <div className="content">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                minus sapiente laudantium inventore qui id voluptatum
                perferendis totam tempore aliquam. Facilis dicta facere, aut hic
                illo perferendis omnis eveniet magni!
              </h3>
            </div>
          </div>
          <div className="trend-post">
            <div className="user">
              <h3>Dave Cory</h3>
            </div>
            <div className="content">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                minus sapiente laudantium inventore qui id voluptatum
                perferendis totam tempore aliquam. Facilis dicta facere, aut hic
                illo perferendis omnis eveniet magni!
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="blog-container">
          <div className="blog-posts">
            <div className="post">
              <div className="img-container"></div>
              <div className="text">
                <div className="post-title">
                  <h3>Lorem, ipsum dolor.</h3>
                </div>
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
