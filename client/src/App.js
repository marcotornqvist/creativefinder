import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Landing from "./pages/Landing";
import CreativeState from "./context/creative/CreativeState";
import "./App.scss";

const App = () => {
  return (
    <CreativeState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Landing} />
            </Switch>
          </div>
        </div>
      </Router>
    </CreativeState>
  );
};

export default App;
