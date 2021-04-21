import React from "react";

import StatBar from "./statBar";

const CatInfo = ({ breed }) => {
  const cat = breed.breeds[0];

  return (
    <div className="cat-info">
      <div className="image-cont">
        <div className="wrapper">
          <img src={breed.url} alt={cat.name} />
        </div>
        <div className="accent-rect"></div>
      </div>

      <div>
        <h2 className="cat-name">{cat.name}</h2>
        <p className="cat-desc">{cat.description}</p>
        <p>
          <span className="bold">Temperament: </span>
          {cat.temperament}
        </p>
        <p>
          <span className="bold">Origin: </span>
          {cat.origin}
        </p>
        <p>
          <span className="bold">Life Span: </span>
          {cat.life_span} years
        </p>

        <div className="stats">
          <div className="stat">
            <span className="bold">Adaptability:</span>
            <StatBar filled={cat.adaptability} />
          </div>
          <div className="stat">
            <span className="bold">Affection Level:</span>
            <StatBar filled={cat.affection_level} />
          </div>
          <div className="stat">
            <span className="bold">Child Friendly:</span>
            <StatBar filled={cat.child_friendly} />
          </div>
          <div className="stat">
            <span className="bold">Grooming:</span>
            <StatBar filled={cat.grooming} />
          </div>
          <div className="stat">
            <span className="bold">Intelligence:</span>
            <StatBar filled={cat.intelligence} />
          </div>
          <div className="stat">
            <span className="bold">Health issues:</span>
            <StatBar filled={cat.health_issues} />
          </div>
          <div className="stat">
            <span className="bold">Social Needs:</span>
            <StatBar filled={cat.social_needs} />
          </div>
          <div className="stat">
            <span className="bold">Stranger friendly:</span>
            <StatBar filled={cat.stranger_friendly} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatInfo;
