import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../assets/CatwikiLogo.svg";
// import CatImg from "../assets/HeroImagelg.png";

const SearchCats = (props) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    filterBreeds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const selectBreed = (e) => {
    console.log(e.target.id);
    setQuery(e.target.textContent);
    const dropDown = document.getElementById("cats-dropdown");
    dropDown.style.display = "none";
  };

  const searchFocus = () => {
    const dropDown = document.getElementById("cats-dropdown");
    dropDown.style.display = "block";
  };

  const searchBlur = () => {
  };

  const filterBreeds = () => {
    const filteredBreeds = props.breeds.filter((breed) =>
      breed.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredBreeds);
  };

  console.log(query);

  return (
    <div>
      <div className="splash-img">
        {/* <img src={CatImg} alt="" /> */}
        <div className="content-padding">
          <Logo className="logo" />
          <p>Get to know more about your cat breed</p>
          <form onSubmit={handleSubmit} onBlur={searchBlur}>
            <input
              type="text"
              placeholder="Enter your breed"
              value={query}
              onFocus={searchFocus}
              onBlur={searchBlur}
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faSearch} />
            <div id="cats-dropdown">
              {query === ""
                ? props.breeds.map((breed) => (
                    <div
                      key={breed.id}
                      id={breed.id}
                      name={breed.name}
                      className="breed-opt"
                      onClick={selectBreed}
                    >
                      {breed.name}
                    </div>
                  ))
                : data.map((breed) => (
                    <div
                      key={breed.id}
                      id={breed.id}
                      name={breed.name}
                      className="breed-opt"
                      onClick={selectBreed}
                    >
                      {breed.name}
                    </div>
                  ))}
            </div>
          </form>
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
