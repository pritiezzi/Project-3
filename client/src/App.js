import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarPage from "./components/pages/NavTabs";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Directory from "./components/pages/Directory/Directory";



function App() {
  return (
    <Router>
      <div>
        <NavbarPage />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/directory" component={Directory} />
      
      </div>
    </Router>
  );
}

export default App;