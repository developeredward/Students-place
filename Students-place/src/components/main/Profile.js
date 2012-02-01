import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import * as socials from "@fortawesome/free-brands-svg-icons";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "../Loading";
import ReturnNavBar from "../ReturnNavBar";

const Profile = (props) => {
  const { username } = useParams();
  const {
    data: profile,
    isLoading,
    error,
  } = useFetch(props.token, `http://127.0.0.1:8000/api/profiles/${username}`);
  return (
    <div className="profile-details-container">
      {profile ? (
        <>
          <>
            <ReturnNavBar
              text={
                profile.user.middle_name ? (
                  <h3>
                    {profile.user.first_name +
                      " " +
                      profile.user.middle_name +
                      " " +
                      profile.user.last_name}
                  </h3>
                ) : (
                  <h3>
                    {profile.user.first_name + " " + profile.user.last_name}
                  </h3>
                )
              }
            />
            <div className="profile-details">
              <div className="profile-cover">
                {profile.cover_picture ? (
                  <img
                    src={profile.cover_picture}
                    className="cover-pic"
                    alt=""
                  />
                ) : (
                  <FontAwesomeIcon
                    className="cover-pic"
                    icon={solid.faUserCircle}
                  />
                )}
              </div>
              <div className="profile">
                <div className="profile-picture">
                  {profile.user.profile_picture ? (
                    <img
                      src={profile.user.profile_picture}
                      className="profile-pic"
                      alt=""
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="profile-pic"
                      icon={solid.faUserCircle}
                    />
                  )}
                </div>
                <div className="profile-info">
                  <div className="info">
                    <div className="user">
                      <div className="name">
                        <div className="fullname">
                          {profile.user.middle_name ? (
                            <h2 className="user-fullname">
                              {profile.user.first_name +
                                " " +
                                profile.user.middle_name +
                                " " +
                                profile.user.last_name}
                            </h2>
                          ) : (
                            <h2 className="user-fullname">
                              {profile.user.first_name +
                                " " +
                                profile.user.last_name}
                            </h2>
                          )}
                          {profile.user.verified ? (
                            <div className="verified-badge">
                              <FontAwesomeIcon
                                className="badge"
                                size="lg"
                                icon={regular.faCheckCircle}
                              ></FontAwesomeIcon>
                            </div>
                          ) : null}
                        </div>
                        <span className="username">
                          @{profile.user.username}
                        </span>
                      </div>
                      <div className="others">
                        {profile.bio && <p className="bio">{profile.bio}</p>}
                      </div>
                    </div>
                    <div className="action-btns">
                      <button className="message">
                        <FontAwesomeIcon size="lg" icon={regular.faEnvelope} />
                      </button>
                      <button className="follow-btn">Follow</button>
                    </div>
                  </div>
                  <div className="web-links">
                    <div className="web-link">
                      <FontAwesomeIcon icon={socials.faTwitter} />
                      <span>@developedbyed</span>
                    </div>
                    <div className="web-link">
                      <FontAwesomeIcon icon={socials.faInstagram} />
                      <span>developedbyed</span>
                    </div>
                    <div className="web-link">
                      <FontAwesomeIcon icon={socials.faFacebook} />
                      <span>edwin.simo</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user-profile-info">
                <div className="followers info">
                  <span className="count">{profile.followers_count}</span>
                  <span className="text">Followers</span>
                </div>
                <div className="following info">
                  <span className="count">{profile.following_count}</span>
                  <span className="text">Following</span>
                </div>
                <div className="posts info">
                  <span className="count">488</span>
                  <span className="text">Posts</span>
                </div>
              </div>
            </div>
            <div className="feeds"></div>
          </>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default Profile;
