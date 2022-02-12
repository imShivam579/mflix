import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
function App() {
  const [renderContentPositioning, changeRenderContentPositioning] = useState({
    masterHeaderHeight: 0,
    sidebarWidth: 0,
  });
  useEffect(() => {
    const masterheaderHeight = document.getElementById("header").clientHeight;
    const sidebarwidth = document.getElementById("sidebar").clientWidth;
    changeRenderContentPositioning({
      masterHeaderHeight: masterheaderHeight,
      sidebarWidth: sidebarwidth,
    });
  }, []);
  return (
    <div className="App bg-primary">
      <Router>
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/">
            <Home contentPosition={renderContentPositioning} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
