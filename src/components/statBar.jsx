import React from "react";

const StatBar = ({ filled }) => {
  return (
    <div className="stat-bar">
      <div className={filled >= 1 ? "filled bubble" : "bubble"}></div>
      <div className={filled >= 2 ? "filled bubble" : "bubble"}></div>
      <div className={filled >= 3 ? "filled bubble" : "bubble"}></div>
      <div className={filled >= 4 ? "filled bubble" : "bubble"}></div>
      <div className={filled === 5 ? "filled bubble" : "bubble"}></div>
    </div>
  );
};

export default StatBar;
