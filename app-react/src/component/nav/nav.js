import { Link } from "react-router-dom";

import React, { Component } from "react";
import "./nav.css";
import Router from "../../router/index";

const RoutePath = Router.map((item) => {
  return {
    pathname: item.path,
  };
});

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
  }

  render(h) {
    return (
      <div className="el-menu-demo">
        <Link to={RoutePath[0]}>React_Home</Link> |{" "}
        <Link to={RoutePath[1]}>React_About</Link>
      </div>
    );
  }
}
export default Nav;
