import React, { Component } from "react";
import { HashRouter, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./component/nav/nav.js";

import Route from "./router/config";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this);
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Nav></Nav>
          <Switch>
            <Route></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
export default App;
