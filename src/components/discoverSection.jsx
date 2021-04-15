import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DiscoverSection = () => {
  return (
    <div className="discover">
      <p>Most Searched Breeds</p>
      <hr />
      <div className="see-more">
        <h2>66+ Breeds For you to discover</h2>
        <Link to="/top-cats">
          SEE MORE <FontAwesomeIcon icon={faLongArrowAltRight} />
        </Link>
      </div>
      <div className="cat-images">
        <div className="accent-rect"></div>
        <div className="cat">
          <div className="cat-image">
            <img src="" alt="" />
          </div>
          <span className="cat-name">Cat</span>
        </div>
        <div className="cat">
          <div className="cat-image">
            <img src="" alt="" />
          </div>
          <span className="cat-name">Cat</span>
        </div>
        <div className="cat">
          <div className="cat-image">
            <img src="" alt="" />
          </div>
          <span className="cat-name">Cat</span>
        </div>
        <div className="cat">
          <div className="cat-image">
            <img src="" alt="" />
          </div>
          <span className="cat-name">Cat</span>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
