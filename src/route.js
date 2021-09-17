import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import loginMain from "./login";
import dashboard from "./dashboard";

class route extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={loginMain} />
          <Route exact path="/dashboard" component={dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default route;
