import React, { useEffect, useState } from "react";
import {
  guidBtn,
  brandLogo,
  search,
  cross,
  edit,
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
          <button className="btn btn__icon guide-btn fr-cc headerStart-child">
            {guidBtn}
          </button>
          <div className="brand-logo headerStart-child fr-cc">{brandLogo}</div>
        </div>
        <div className="master__header--end">
          <button
            id="btn-feedback"
            className="btn-transparent fr-cc icon-left headerEnd-child"
          >
            {edit}Feedback
          </button>
          <div className=" input input--searchbar headerEnd-child">
            <button className="btn btn__icon">{search}</button>
            <input type="text" placeholder="Search Movies or TV Shows" />
            <button className="btn btn__icon">{cross}</button>
          </div>
          <button className="btn-fill headerEnd-child">Subscribe</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
