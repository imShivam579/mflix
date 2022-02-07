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
      <div className="master__header--end">
        <div className="input search-bar">
          <button className="btn-right">
            <img src="/icon/search.svg" alt="" typeof="icon/svg" />
          </button>
          <input type="text" placeholder="Search Movies or TV Shows" />
          <button className="btn-left">
            <img src="/icon/cross.svg" alt="" typeof="icon/svg" />
          </button>
        </div>
        <div className="input">
          <input type="text" placeholder="Search Movies or TV Shows" />
          <div className="letter-count">
            <span>0/40</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
