import React, { useState } from "react";
import "./sidebarStyle.css";
import { stat, star, favourite, compass } from "../../customIcons/icons";
function Sidebar() {
  const [appGuideState, changeAppGuideState] = useState({
    activeTitle: "For You",
    guidSectionObject: [
      { title: "For You", icon: favourite },
      { title: "Explore", icon: compass },
      { title: "Popular", icon: stat },
      { title: "Favourite", icon: star },
    ],
  });
  const [userGuideState, changeUserGuideState] = useState({
    activeTitle: "For You",
    sectionTitle: "My Library",
    guidSectionObject: [
      { title: "For You" },
      { title: "Explore" },
      { title: "Popular" },
      { title: "Favourite" },
    ],
  });
  function toggleClassStyle(index) {
    if (
      appGuideState.guidSectionObject[index].title === appGuideState.activeTitle
    ) {
      return "guid-section--entry active";
    } else {
      return "guid-section--entry";
    }
  }
  const activateLink = (index) => {
    changeAppGuideState({
      ...appGuideState,
      activeTitle: appGuideState.guidSectionObject[index].title,
    });
  };
  return (
    <div id="sidebar" className="sidebar bg-primary--900">
      <div className="app__guide-wrapper">
        <div className="app__guide-section">
          {appGuideState.guidSectionObject.map((element, index) => (
            <div
              key={index}
              className={toggleClassStyle(index)}
              onClick={() => {
                activateLink(index);
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
              {userGuideState.sectionTitle}
            </div>
            {userGuideState.guidSectionObject.map((element, index) => (
              <div
                key={index}
                className={toggleClassStyle(index)}
                onClick={() => {
                  activateLink(index);
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
