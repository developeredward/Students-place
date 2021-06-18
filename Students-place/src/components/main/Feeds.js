import React from "react";

const Feeds = () => {
  return (
    <div className="feeds-container">
      <div className="feed">
        <div className="post">
          <div className="post-user">
            <div className="user">
              <img src="" alt="" />
              <h3>John Doe</h3>
            </div>
          </div>
          <div className="post-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              repudiandae impedit voluptatem eligendi vero autem ipsa nisi
              perferendis dicta aliquid quaerat natus consequuntur, repellat nam
              accusamus perspiciatis nostrum. Magnam officia quod dolor
              aspernatur sunt animi eius laudantium consequatur odit ratione?
            </p>
          </div>
          <div className="post-actions">
            <div className="react"></div>
            <div className="reply"></div>
            <div className="share"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
