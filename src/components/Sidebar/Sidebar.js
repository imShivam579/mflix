import React, { useState } from "react";
import "./sidebarStyle.css";
import {
  Stat,
  Star,
  Favourite,
  Compass,
  Trophy,
} from "../../customIcons/icons";
function Sidebar() {
  const [appGuideState, changeAppGuideState] = useState({
    activeTitle: "For You",
    guidSectionObject: [
      { title: "For You", icon: Favourite, type: "appGuideState" },
      { title: "Browse", icon: Compass, type: "appGuideState" },
      { title: "Chart", icon: Trophy, type: "appGuideState" },
      { title: "Popular", icon: Stat, type: "appGuideState" },
      { title: "Favourite", icon: Star, type: "appGuideState" },
    ],
    userGuideSectionTitle: "My Library",
    userGuideSectionObject: [
      { title: "Favourite Movies", type: "userGuideState" },
      { title: "Artists", type: "userGuideState" },
      { title: "History", type: "userGuideState" },
      { title: "Downloads", type: "userGuideState" },
    ],
  });
  function toggleAppGuideClassStyle(index) {
    if (
      appGuideState.guidSectionObject[index].title === appGuideState.activeTitle
    ) {
      return "guid-section--entry active";
    } else {
      return "guid-section--entry";
    }
  }
  function toggleUserGuideClassStyle(index) {
    if (
      appGuideState.userGuideSectionObject[index].title ===
      appGuideState.activeTitle
    ) {
      return "userGuide-section--entry active";
    } else {
      return "userGuide-section--entry";
    }
  }
  const activateLink = (index, type) => {
    type === "appGuideState"
      ? changeAppGuideState({
          ...appGuideState,
          activeTitle: appGuideState.guidSectionObject[index].title,
        })
      : changeAppGuideState({
          ...appGuideState,
          activeTitle: appGuideState.userGuideSectionObject[index].title,
        });
  };
  return (
    <div id="sidebar" className="sidebar bg-primary--900">
      <div className="app__guide-wrapper">
        <div className="app__guide-section">
          {appGuideState.guidSectionObject.map((element, index) => (
            <div
              key={index}
              className={toggleAppGuideClassStyle(index)}
              onClick={() => {
                activateLink(index, element.type);
              }}
            >
              {element.icon}
              <span className="section-entry-name fr-cc"> {element.title}</span>
            </div>
          ))}
        </div>
        <div className="app__guide-scrollableSection">
          <div className="app__guide-section">
            <div className="guide-section--title">
              {appGuideState.userGuideSectionTitle}
            </div>
            {appGuideState.userGuideSectionObject.map((element, index) => (
              <div
                key={index}
                className={toggleUserGuideClassStyle(index)}
                onClick={() => {
                  activateLink(index, element.type);
                }}
              >
                {element.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
