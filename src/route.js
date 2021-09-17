import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./login";
import dashboard from "./dashboard";

class Route extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default Route;
