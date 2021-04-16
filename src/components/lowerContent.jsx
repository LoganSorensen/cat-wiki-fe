import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import CatImg1 from "../assets/image1.png";
import CatImg2 from "../assets/image2.png";
import CatImg3 from "../assets/image3.png";

const LowerContent = () => {
  return (
    <div className="lower-content">
      <div>
        <hr />
        <h2>Why should you have a cat?</h2>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels
        </p>
        <a
          className="see-more-link"
          href="https://www.mentalfloss.com/article/51154/10-scientific-benefits-being-cat-owner"
          target="_blank"
          rel="noreferrer"
        >
          READ MORE <FontAwesomeIcon icon={faLongArrowAltRight} />
        </a>
      </div>
      <div className="cat-collage">
        <div>
          <img src={CatImg2} alt="cat" />

          <img src={CatImg1} alt="cat" className="lower-image" />
        </div>
        <img src={CatImg3} alt="cat" />
      </div>
    </div>
  );
};

export default LowerContent;
