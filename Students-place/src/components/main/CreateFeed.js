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
  const handlesubmit = (e) => {
    e.preventDefault();
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
            <button>
              <FontAwesomeIcon className="emoji icon" icon={solid.faSmile} />
            </button>
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
          <button className="submit-post" type="submit" onClick={handlesubmit}>
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
