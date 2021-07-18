import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import opportunity from "../../static/img/icons/opportunity.png";
import technology from "../../static/img/icons/technology.png";
import library from "../../static/img/icons/library.png";
import entertainment from "../../static/img/icons/entertainment.png";
import blog from "../../static/img/icons/blog.png";
import contact from "../../static/img/icons/contact.png";
import faq from "../../static/img/icons/faq.png";

const LeftNav = () => {
  return (
    <div className="left-nav-links">
      <div className="user-interest-details">
        <ul className="interests">
          <button>
            <FontAwesomeIcon icon={solid.faHome} /> Home
          </button>
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
            <button>
              <span>
                <FontAwesomeIcon
                  className="left-nav-icon"
                  size="lg"
                  icon={solid.faUniversity}
                />{" "}
                Library
              </span>
            </button>

            <button>
              <span>
                <FontAwesomeIcon
                  className="left-nav-icon"
                  size="lg"
                  icon={regular.faLightbulb}
                />{" "}
                Opportunities
              </span>
            </button>
            <button>
              <span>
                <FontAwesomeIcon
                  className="left-nav-icon"
                  size="lg"
                  icon={solid.faNetworkWired}
                />{" "}
                Technology
              </span>
            </button>
            <button>
              <span>
                <FontAwesomeIcon
                  className="left-nav-icon"
                  size="lg"
                  icon={solid.faIcons}
                />{" "}
                Entertainment
              </span>
            </button>
            <button>
              <span>
                <FontAwesomeIcon
                  className="left-nav-icon"
                  size="lg"
                  icon={solid.faBlog}
                />{" "}
                Blog
              </span>
            </button>
            <button>
              <span>
                <FontAwesomeIcon
                  className="left-nav-icon"
                  size="lg"
                  icon={solid.faPhoneAlt}
                />{" "}
                Contact
              </span>
            </button>
            <button>
              <span>
                {" "}
                <FontAwesomeIcon
                  className="left-nav-icon"
                  size="lg"
                  icon={regular.faQuestionCircle}
                />{" "}
                FAQ
              </span>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
