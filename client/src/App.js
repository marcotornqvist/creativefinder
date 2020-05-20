import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Sidenav from "./layout/Sidenav";
// import Footer from "./layout/Footer";
import Creatives from "./pages/Creatives";
import Creative from "./pages/Creative";
import Forum from "./pages/Forum";
import Settings from "./pages/Settings";
import MyProfile from "./pages/MyProfile";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreativeState from "./context/creative/CreativeState";
import ViewportState from "./context/viewport/ViewportState";
import PrivateRoute from "./routing/PrivateRoute";
import GuestRoute from "./routing/GuestRoute";

import "./App.scss";

const App = () => {
  return (
    <CreativeState>
      <ViewportState>
        <Router>
          <div className="App">
            <Navbar />
            <Sidenav />
            <Switch>
              <Route exact path="/creatives" component={Creatives} />
              <Route exact path="/creative/:id" component={Creative} />
              <Route exact path="/forum" component={Forum} />
              <GuestRoute exact path="/" component={Landing} />
              <GuestRoute exact path="/log-in" component={Login} />
              <GuestRoute exact path="/sign-up" component={Register} />
              <PrivateRoute exact path="/settings" component={Settings} />
              <PrivateRoute exact path="/my-profile" component={MyProfile} />
            </Switch>
            {/* <Footer /> */}
          </div>
        </Router>
      </ViewportState>
    </CreativeState>
  );
};

export default App;
