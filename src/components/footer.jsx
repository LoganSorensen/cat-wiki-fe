import React from "react";

import { ReactComponent as Logo } from "../assets/CatwikiLogo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <Logo color="white" />
      <p>
        created by{" "}
        <a
          href="https://github.com/LoganSorensen"
          target="_blank"
          rel="noreferrer"
        >
          LoganSorensen
        </a>{" "}
        - devChallenges.io 2021
      </p>
    </div>
  );
};

export default Footer;
