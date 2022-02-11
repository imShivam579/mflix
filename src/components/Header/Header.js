import React, { useEffect, useState } from "react";
import {
  GuidBtn,
  BrandLogo,
  Search,
  Cross,
  Edit,
} from "../../customIcons/icons";
import "./headerStyle.css";
function Header() {
  const [masterHeaderHeight, setMasterHeaderHeight] = useState(0);
  useEffect(() => {
    const headerHeight = document.getElementById("header").clientHeight;
    console.log("headerHeight", headerHeight);
  }, []);
  return (
    <header id="header" className="master__header bg-primary">
      <div class="master__header--wrapper">
        <div className="master__header--start">
          <button
            id="guideBtn"
            className="btn btn__icon guide-btn fr-cc headerStart-child"
          >
            {GuidBtn}
          </button>
          <div className="brand-logo headerStart-child fr-cc">{BrandLogo}</div>
        </div>
        <div className="master__header--end">
          <button
            id="btn-feedback"
            className="btn-transparent fr-cc icon-left headerEnd-child"
          >
            {Edit}Feedback
          </button>
          <div className=" input input--searchbar headerEnd-child">
            <button className="btn btn__icon">{Search}</button>
            <input type="text" placeholder="Search Movies or TV Shows" />
            <button className="btn btn__icon">{Cross}</button>
          </div>
          <button className="btn-fill headerEnd-child">Subscribe</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
