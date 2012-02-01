import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import Loading from "../Loading";
import CreatePost from "./CreateFeed";

const Feeds = ({
  feeds,
  loading,
  isAuthenticated,
  updated,
  token,
  userImage,
}) => {
  const initialState = {
    data: "",
    comment: "",
    postId: null,
    commentError: "",
  };
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(initialState);

  const handleChange = (e) => {
    setValues({
      data: e.target.value,
      postId: e.target.parentNode.id,
    });
  };
  const validate = () => {
    let commentError = "";

    if (!values.data.trim()) {
      commentError = "Comment Cannot be Empty";
    }
    if (commentError) {
      setError({ commentError });
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();
    if (isValid) {
      setValues(initialState);
      setError(initialState);
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(
          "http://127.0.0.1:8000/api/comment/",
          {
            comment: values.data,
            post: values.postId,
          },
          { headers: headers }
        )
        .then((res) => {
          updated();
          // console.log(res);
        });
      console.log(values);
    }
  };

  return (
    <div className="feeds-container">
      {isAuthenticated ? (
        <div className="feed">
          {loading ? (
            <div>
              {" "}
              <Loading text="Getting Feeds...." />
            </div>
          ) : (
            <>
              <CreatePost
                token={token}
                reload={updated}
                profilePicture={userImage}
              />
              {feeds ? (
                <>
                  {feeds.map((post) => (
                    <div
                      className="post"
                      name="postId"
                      key={post.id.toString()}
                    >
                      <div className="post-user">
                        <Link
                          style={{ textDecoration: "none", color: "unset" }}
                          to={`/${post.post_by.username}`}
                        >
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
                                  {post.post_by.verified ? (
                                    <div className="verified-badge">
                                      <FontAwesomeIcon
                                        className="badge"
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
                        </Link>

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
                              {new Date(post.timestamp).toLocaleString(
                                "en-US",
                                {
                                  weekday: "short",
                                  day: "numeric",
                                  month: "long",
                                  year: "2-digit",
                                }
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Link
                        to={`/post/${post.id}`}
                        style={{ textDecoration: "none", color: "unset" }}
                      >
                        <div className="post-content">
                          <p>{post.content}</p>
                        </div>
                      </Link>
                      <div className="post-actions">
                        <button className="action react">
                          {" "}
                          <FontAwesomeIcon icon={regular.faHeart} size="lg" />
                          <span id="react-count count">{post.like}</span>
                        </button>
                        <button className="action reply">
                          <FontAwesomeIcon icon={regular.faComment} size="lg" />
                          <span id="reply-count count">
                            {post.comments.length}
                          </span>
                        </button>
                        <button className="action retweat">
                          <FontAwesomeIcon icon={solid.faRetweet} size="lg" />
                          <span id="retweet-count count">
                            {post.retweetCount}
                          </span>
                        </button>
                        <button className="action share">
                          <FontAwesomeIcon icon={solid.faShare} size="lg" />
                        </button>
                      </div>
                      <div className="commenting-input-box">
                        <div className="commenting">
                          <div className="profile-pic">
                            {userImage ? (
                              <img
                                src={userImage}
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
                          <form
                            className="comment-input"
                            onSubmit={handleSubmit}
                          >
                            <div id={post.id} className="text">
                              <textarea
                                name="comment"
                                // id={post.id.toString()}
                                className="comment-input-field"
                                placeholder="Write a comment..."
                                value={values.comment}
                                onChange={handleChange}
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
                          </form>
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
                                    <span className="votes-count">
                                      30 votes
                                    </span>
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
                </>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifiyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "10px",
                    // top: "50vh",
                    // width: "100%",
                    // height: "100vh",
                  }}
                >
                  <h2>SERVER ERROR</h2>
                  <h3>Unable to Fetch Feeds </h3>
                  <h4>
                    Do not panick the Error is from us Kindly click
                    <Link
                      to=""
                      style={{ textDecoration: "none", color: "#bb83ff" }}
                    >
                      {""}
                      here
                    </Link>{" "}
                    to Refresh
                  </h4>
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <div
          className="feed"
          style={{
            display: "block",
            position: "fixed",
            // top: "50vh",
            width: "100%",
            background: "#313131",
            height: "100vh",
          }}
        >
          <h2>NOT AUTHENTICATED</h2>
          <h4>
            You are not Authenticated Click{" "}
            <Link
              to="/login/"
              style={{ textDecoration: "none", color: "#bb83ff" }}
            >
              here
            </Link>{" "}
            to Login{" "}
          </h4>
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
