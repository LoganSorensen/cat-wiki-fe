import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../assets/CatwikiLogo.svg";
// import CatImg from "../assets/HeroImagelg.png";

const SearchCats = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchFocus = () => {
    const dropDown = document.getElementById("cats-dropdown");
    dropDown.style.display = "block";
  };

  const searchBlur = () => {
    const dropDown = document.getElementById("cats-dropdown");
    dropDown.style.display = "none";
  };

  console.log(props.breeds);

  return (
    <div>
      <div className="splash-img">
        {/* <img src={CatImg} alt="" /> */}
        <div className="content-padding">
          <Logo className="logo" />
          <p>Get to know more about your cat breed</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your breed"
              onFocus={searchFocus}
              onBlur={searchBlur}
            />
            <FontAwesomeIcon icon={faSearch} />
          </form>
          <div id="cats-dropdown">
            {props.breeds.map((breed) => (
              <div key={breed.id} className="breed-opt">
                {breed.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    breeds: state.setCats.breeds,
  };
};

export default connect(mapStateToProps, {})(SearchCats);
