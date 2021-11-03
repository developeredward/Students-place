import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";

const CreatePost = ({ token, reload, profilePicture }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const vl = e.target.value;
    setValue(vl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    axios
      .post(
        "http://127.0.0.1:8000/api/feeds/create/",
        {
          content: value,
        },
        { headers: headers }
      )
      .then((res) => {
        setValue("");
        reload();
      });
  };
  const handleEmoji = (e) => {
    e.preventDefault();
    const emojiContainer = document.querySelector(".all-emoji");

    emojiContainer.classList.toggle("show-emojis");
  };

  return (
    <div className="post-create-container">
      <form>
        <div className="post-create-input">
          <div className="profile-img">
            <img src={profilePicture} className="img" alt="" />
          </div>
          <div className="create">
            <textarea
              placeholder="What is on your mind?..."
              type="text"
              value={value}
              onChange={handleChange}
            />
            <div className="emojis-btn">
              <button>
                <FontAwesomeIcon
                  className="parent-emoji emoji icon"
                  icon={solid.faSmile}
                  // onClick={handleEmoji}
                  onMouseOverCapture={handleEmoji}
                />
              </button>
              <div className="all-emoji">
                <div className="i-emoji">
                  <FontAwesomeIcon
                    className="emoji icon"
                    icon={solid.faSmile}
                  />
                </div>
                <div className="i-emoji">
                  <FontAwesomeIcon
                    className="emoji icon"
                    icon={solid.faSadCry}
                  />
                </div>
                <div className="i-emoji">
                  <FontAwesomeIcon
                    className="emoji icon"
                    icon={solid.faSadTear}
                  />
                </div>
                <div className="i-emoji">
                  <FontAwesomeIcon
                    className="emoji icon"
                    icon={solid.faSmileWink}
                  />
                </div>
                <div className="i-emoji">
                  <FontAwesomeIcon className="emoji icon" icon={solid.faStar} />
                </div>
                <div className="i-emoji">
                  <FontAwesomeIcon
                    className="emoji icon thumbs"
                    icon={solid.faThumbsUp}
                  />
                </div>
                <div className="i-emoji">
                  <FontAwesomeIcon
                    className="emoji icon thumbs"
                    icon={solid.faThumbsDown}
                  />
                </div>
                <div className="i-emoji">
                  <FontAwesomeIcon
                    className="emoji icon pin"
                    icon={solid.faThumbtack}
                  />
                </div>
                <div className="i-emoji">
                  <FontAwesomeIcon
                    className="emoji icon fire"
                    icon={solid.faFire}
                  />
                </div>
                <div className="i-emoji">
                  <FontAwesomeIcon
                    className="emoji icon angry"
                    icon={solid.faAngry}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post-create-alt">
          <div className="alt-btns">
            <button>
              <FontAwesomeIcon className="clip icon" icon={solid.faPaperclip} />
            </button>
            <button>
              <FontAwesomeIcon className="clip icon" icon={solid.faCamera} />
            </button>
          </div>
          <button className="submit-post" type="submit" onClick={handleSubmit}>
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
