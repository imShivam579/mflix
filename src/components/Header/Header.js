import React from "react";
import "./headerStyle.css";
function Header() {
  return (
    <header className="master__header">
      <div className="master__header--start">
        <div className="btn btn__icon guide-btn">
          <img src="/icon/Group(2).svg" alt="logo" typeof="image/svg" />
        </div>
        <div className="brand-logo">
          <img src="/icon/BrandLogo-name.svg" alt="logo" typeof="image/svg" />
        </div>
      </div>
    </header>
  );
}

export default Header;
