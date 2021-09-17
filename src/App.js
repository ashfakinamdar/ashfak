import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import login from "./login";
import dashboard from "./dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={login} />
            <Route exact path="/dashboard" component={dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
