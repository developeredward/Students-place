import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";

const LeftNav = () => {
  return (
    <div className="left-nav-links">
      <div className="user-interest-details">
        <ul className="interests">
          <button>
            <FontAwesomeIcon icon={solid.faFire} /> Trending 24hrs
          </button>
          <button>
            <FontAwesomeIcon icon={regular.faHeart} /> Favourites
          </button>
        </ul>
      </div>
      <div className="blog-navigations">
        <div className="title">
          <h3>POPULAR</h3>
        </div>
        <div className="navigation">
          <ul>
            <button>Opportunities</button>
            <button>Technology</button>
            <button>Students Library</button>
            <button>Entertainment</button>
            <button>Blog</button>
            <button>Contact</button>
            <button>FAQ</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
