import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import login from "./Components/login";
import dashboard from "./Components/dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login" component={login} />
            <Route exact path="/dashboard" component={dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
