import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/CatwikiLogo.svg";
import CatImg from "../assets/HeroImagelg.png";

const SearchCats = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="splash-img">
        <img src={CatImg} alt="" />
        <div className="content-padding">
          <Logo className="logo" />
          <p>Get to know more about your cat breed</p>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your breed" />
            <FontAwesomeIcon icon={faSearch} />
          </form>
        </div>
      </div>

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
    </div>
  );
};

export default SearchCats;
