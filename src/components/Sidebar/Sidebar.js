import React, { useEffect, useState } from "react";
import "./sidebarStyle.css";
import { stat, star, favourite, compass } from "../../customIcons/icons";
function Sidebar() {
  return (
    <div id="sidebar" className="sidebar bg-primary--900">
      <div className="app__guide-section">
        <div className="guid-section--entry active">
          {favourite} Random Text
        </div>
        <div className="guid-section--entry">{stat} Random Text</div>
        <div className="guid-section--entry">{compass} Random Text</div>
        <div className="guid-section--entry">{star} Random Text</div>
      </div>
      <div className="app__guide-section">
        <div className="guide-section--title">My Library</div>
        <div className="guid-section--entry">Random Text</div>
        <div className="guid-section--entry">Random Text</div>
        <div className="guid-section--entry">Random Text</div>
      </div>
    </div>
  );
}

export default Sidebar;
