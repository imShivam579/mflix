import React, { useState, useEffect } from "react";
import "./sidebarStyle.css";
import { Favourite, Compass, Trophy } from "../../customIcons/icons";

function Sidebar() {
  const [appGuideState, changeAppGuideState] = useState({
    activeTitle: "For You",
    guidSectionObject: [
      { title: "For You", icon: Favourite, type: "appGuideState" },
      { title: "Browse", icon: Compass, type: "appGuideState" },
      { title: "Chart", icon: Trophy, type: "appGuideState" },
    ],
    userGuideSectionTitle: "My Library",
    userGuideSectionObject: [
      { title: "Favourites", type: "userGuideState" },
      { title: "Artists", type: "userGuideState" },
      { title: "History", type: "userGuideState" },
      { title: "Downloads", type: "userGuideState" },
    ],
  });
  function toggleClassStyle(title) {
    if (title === appGuideState.activeTitle) {
      return "guide-section--entry active";
    } else {
      return "guide-section--entry";
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
        <div id="appGuidSection" className="app__guide-section">
          {appGuideState.guidSectionObject.map((element, index) => (
            <div
              key={index}
              className={toggleClassStyle(element.title)}
              onClick={() => {
                activateLink(index, element.type);
              }}
            >
              {element.icon}
              <span className="section-entry-name fr-cc"> {element.title}</span>
            </div>
          ))}
        </div>
        <div class="app__guide-scrollableSection ">
          <div class="guide-scrollableSection-wrapper overflow-scroll">
            <div className="app__guide-section">
              <div className="guide-section--title">
                {appGuideState.userGuideSectionTitle}
              </div>
              {appGuideState.userGuideSectionObject.map((element, index) => (
                <div
                  key={index}
                  className={toggleClassStyle(element.title)}
                  onClick={() => {
                    activateLink(index, element.type);
                  }}
                >
                  {element.title}
                </div>
              ))}
            </div>
            <div className="app__guide-section">
              <div className="guide-section--title">My Friends</div>
              <div className="guide-section--entry">
                <div className="user__profile--imgWrapper">
                  <img src="./images/user-profile.png" alt="" />
                </div>
                The Rock
              </div>
              <div className="guide-section--entry">
                <div className="user__profile--imgWrapper">
                  <img src="./images/user-profile.png" alt="" />
                </div>
                The Rock
              </div>
              <div className="guide-section--entry">
                <div className="user__profile--imgWrapper">
                  <img src="./images/user-profile.png" alt="" />
                </div>
                The Rock
              </div>
              <div className="guide-section--entry">
                <div className="user__profile--imgWrapper">
                  <img src="./images/user-profile.png" alt="" />
                </div>
                The Rock
              </div>
              <div className="guide-section--entry">
                <div className="user__profile--imgWrapper">
                  <img src="./images/user-profile.png" alt="" />
                </div>
                The Rock
              </div>
              <div className="guide-section--entry">
                <div className="user__profile--imgWrapper">
                  <img src="./images/user-profile.png" alt="" />
                </div>
                The Rock
              </div>
              <div className="guide-section--entry">
                <div className="user__profile--imgWrapper">
                  <img src="./images/user-profile.png" alt="" />
                </div>
                The Rock
              </div>
              <div className="guide-section--entry">
                <div className="user__profile--imgWrapper">
                  <img src="./images/user-profile.png" alt="" />
                </div>
                The Rock
              </div>
              <div className="guide-section--entry">
                <div className="user__profile--imgWrapper">
                  <img src="./images/user-profile.png" alt="" />
                </div>
                The Rock
              </div>
              <div className="guide-section--entry">
                <div className="user__profile--imgWrapper">
                  <img src="./images/user-profile.png" alt="" />
                </div>
                The Rock
              </div>
              <div className="guide-section--entry">
                <div className="user__profile--imgWrapper">
                  <img src="./images/user-profile.png" alt="" />
                </div>
                The Rock
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
