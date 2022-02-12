import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
function App() {
  const [appContentPosition, changeAppContentPosition] = useState({
    masterHeaderHeight: 0,
    sidebarWidth: 0,
  });
  useEffect(() => {
    const masterheaderHeight = document.getElementById("header").clientHeight;
    const sidebarwidth = document.getElementById("sidebar").clientWidth;
    changeAppContentPosition({
      masterHeaderHeight: masterheaderHeight,
      sidebarWidth: sidebarwidth,
    });
  }, []);
  const renderContentPositionLeft = `${appContentPosition.sidebarWidth}px`;
  return (
    <div className="App bg-primary">
      <Router>
        <Header />
        <Sidebar />
        <div
          className="rich-render-container"
          style={{
            "--render-richContent-marginLeft": `${renderContentPositionLeft}`,
          }}
        >
          <Switch>
            <Route path="/">
              <Home PositionLeft={renderContentPositionLeft} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
