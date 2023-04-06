import React from "react";

const Logo = () => {
  return (
    <div className="brand-logo">
      <img src={require("../../assets/images/Union.png")} alt="unit-logo" />
      <img
        src={require("../../assets/images/lendsqr.png")}
        alt="lendsqr-logo"
        className="lendsqr-text-logo"
      />
    </div>
  );
};

export default Logo;
