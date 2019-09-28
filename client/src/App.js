import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Directory from "./components/pages/Directory";
import NavTabs from './components/pages/NavTabs';


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Profile} />
        <Route exact path="/blog" component={Directory} />
      </div>
    </Router>
  );
}


export default App;