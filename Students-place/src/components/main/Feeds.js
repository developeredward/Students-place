import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import send from "../../static/img/icons/send.png";

const Feeds = ({ feeds, isAuthenticated, token, userImage }) => {
  return (
    <div className="feeds-container">
      {isAuthenticated ? (
        <div className="feed">
          {feeds.map((post) => (
            <div className="post" key={post.id.toString()}>
              <div className="post-user">
                <div className="user">
                  <div className="profile-pic">
                    {post.post_by.profile_picture ? (
                      <img
                        className="img"
                        src={post.post_by.profile_picture}
                        alt=""
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="img"
                        icon={solid.faUserCircle}
                      />
                    )}
                  </div>
                  <div className="user-details">
                    <div className="user-fullname-username">
                      <div className="fullname">
                        <h3>{post.post_by.get_full_name}</h3>
                        {post.isVerified ? (
                          <div className="verified-badge">
                            <FontAwesomeIcon
                              icon={regular.faCheckCircle}
                            ></FontAwesomeIcon>
                          </div>
                        ) : null}
                      </div>
                      <div className="username">
                        <span>@{post.post_by.username}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timestamp-options">
                  <div className="options">
                    <div className="menu">
                      <div className="menu-bar"></div>
                      <div className="menu-bar"></div>
                      <div className="menu-bar hidden-proof"></div>
                    </div>{" "}
                  </div>
                  <div className="timestamp">
                    <span>
                      {new Date(post.timestamp).toLocaleString("en-US", {
                        weekday: "short",
                        day: "numeric",
                        month: "long",
                        year: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="post-content">
                <p>{post.content}</p>
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
                    {userImage ? (
                      <img src={userImage} className="profile-img" alt="" />
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
                {post.get_recent_comments.map((comment) => (
                  <div className="comment" key={comment.id.toString()}>
                    <div className="commentor-profile-pic">
                      {comment.user.profile_picture ? (
                        <img
                          src={comment.user.profile_picture}
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
                    <div className="comment-contents-box">
                      <div className="comment-contents">
                        <div className="commentor-details">
                          <div className="commentor-name">
                            <h4 className="comment-fullname">
                              {comment.user.get_full_name}
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
      ) : (
        <div className="feed">
          <div className="post">
            <div className="post-content">
              <h3>Unable To Fetch Data</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    userImage: state.picture,
    token: state.token,
  };
};
export default connect(mapStateToProps)(Feeds);
