import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import send from "../../static/img/icons/send.png";

const Feeds = ({ data, user }) => {
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
                <span id="reply-count count">{post.comments.length}</span>
              </button>
              <button className="action retweat">
                <FontAwesomeIcon icon={solid.faRetweet} size="lg" />
                <span id="retweet-count count">{post.retweetCount}</span>
              </button>
              <button className="action share">
                <FontAwesomeIcon icon={solid.faShare} size="lg" />
              </button>
            </div>
            <div className="commenting-input-box">
              <div className="commenting">
                <div className="profile-pic">
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      className="profile-img"
                      alt=""
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={solid.faUserCircle}
                      className="profile-img"
                    />
                  )}
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
                    <button className="submit-comment" type="submit">
                      <FontAwesomeIcon icon={solid.faArrowRight} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="comments-section">
              {post.comments.map((comment) => (
                <div className="comment">
                  <div className="commentor-profile-pic">
                    {comment.img ? (
                      <img src={comment.img} className="profile-img" alt="" />
                    ) : (
                      <FontAwesomeIcon
                        icon={solid.faUserCircle}
                        className="profile-img"
                      />
                    )}
                  </div>
                  <div className="comment-contents-box">
                    <div className="comment-contents">
                      <div className="commentor-details">
                        <div className="commentor-name">
                          <h4 className="comment-fullname">
                            {comment.fullname}
                          </h4>
                        </div>
                        <div className="comment-text">
                          <p className="comment-content-text">
                            {comment.comment}
                          </p>
                        </div>
                      </div>
                      <div className="comment-vote">
                        <div className="vote">
                          <FontAwesomeIcon
                            icon={regular.faHeart}
                            style={{ fontSize: "25px" }}
                          />
                          <span className="votes-count">30 votes</span>
                        </div>
                      </div>
                    </div>
                    <div className="comment-actions">
                      <span className="comment-action reply">
                        <FontAwesomeIcon icon={solid.faReply} /> reply
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feeds;
