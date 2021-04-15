import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/CatwikiLogo.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
    </div>
  );
};

export default Header;
