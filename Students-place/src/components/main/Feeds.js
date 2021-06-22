import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import send from "../../static/img/icons/send.png";

const Feeds = ({ data }) => {
  return (
    <div className="feeds-container">
      <div className="feed">
        {data.map((post) => (
          <div className="post">
            <div className="post-user">
              <div className="user">
                <div className="profile-pic">
                  <img src={post.img} alt={post.username} />
                </div>
                <div className="user-details">
                  <div className="user-fullname-username">
                    <div className="fullname">
                      <h3>{post.fullname}</h3>
                      {post.isVerified ? (
                        <div className="verified-badge">
                          <FontAwesomeIcon
                            icon={regular.faCheckCircle}
                          ></FontAwesomeIcon>
                        </div>
                      ) : null}
                    </div>
                    <div className="username">
                      <span>{post.username}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timestamp">
                <span>{post.timestamp} hours ago</span>{" "}
              </div>
            </div>
            <div className="post-content">
              <p>{post.post}</p>
            </div>
            <div className="post-actions">
              <button className="action react">
                {" "}
                <FontAwesomeIcon icon={regular.faHeart} size="lg" />
                <span id="react-count count">{post.like}</span>
              </button>
              <button className="action reply">
                <FontAwesomeIcon icon={regular.faComment} size="lg" />
                <span id="reply-count count">{post.commentCount}</span>
              </button>
              <button className="action retweat">
                <FontAwesomeIcon icon={solid.faRetweet} size="lg" />
                <span id="retweet-count count">{post.retweetCount}</span>
              </button>
              <button className="action share">
                <FontAwesomeIcon icon={solid.faShare} size="lg" />
              </button>
            </div>
            <div className="commenting-box">
              <div className="commenting">
                <div className="profile-pic">
                  <img src={post.img} alt="" />
                </div>
                <div className="comment-input">
                  <div className="text">
                    <textarea
                      name="comment"
                      id="comment-input"
                      placeholder="Write a comment..."
                    ></textarea>
                  </div>

                  <div className="action-btns">
                    <button>
                      <FontAwesomeIcon
                        className="clip icon"
                        icon={solid.faPaperclip}
                      />
                    </button>
                    <button>
                      <FontAwesomeIcon
                        className="emoji icon"
                        icon={solid.faSmile}
                      />
                    </button>
                    <button type="submit">
                      <img src={send} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feeds;
