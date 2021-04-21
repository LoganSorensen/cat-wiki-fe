import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/CatwikiLogo.svg";

const SearchCats = (props) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    filterBreeds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

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

  const searchBlur = (e) => {
    const dropDown = document.getElementById("cats-dropdown");
    if (!e.currentTarget.contains(e.relatedTarget))
      dropDown.style.display = "none";
  };

  const filterBreeds = () => {
    const filteredBreeds = props.breeds.filter((breed) =>
      breed.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredBreeds);
  };

  return (
    <div>
      <div className="splash-img">
        <div className="content-padding">
          <Logo className="logo" />
          <p>Get to know more about your cat breed</p>
          <form onSubmit={handleSubmit} onBlur={searchBlur}>
            <input
              type="text"
              placeholder="Enter your breed"
              value={query}
              onFocus={searchFocus}
              onChange={(e) => setQuery(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} />
            <div
              id="cats-dropdown"
              style={
                query !== "" && data.length === 0
                  ? { padding: "0" }
                  : { padding: "1rem" }
              }
            >
              {query === ""
                ? props.breeds.map((breed) => (
                    <Link to={`/breed/${breed.id}`} key={breed.id} tabIndex="0">
                      <div
                        id={breed.id}
                        name={breed.name}
                        className="breed-opt"
                        onClick={selectBreed}
                      >
                        {breed.name}
                      </div>
                    </Link>
                  ))
                : data.map((breed) => (
                    <Link to={`/breed/${breed.id}`} key={breed.id} tabIndex="0">
                      <div
                        id={breed.id}
                        name={breed.name}
                        className="breed-opt"
                        onClick={selectBreed}
                      >
                        {breed.name}
                      </div>
                    </Link>
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
