import React from "react";
import { Route, Redirect } from "react-router-dom";

// config
import Router from "./index";

class RouterConfig extends React.Component {
  render() {
    console.log(this.props.location, "--props.location");
    console.log(Router, "--Router");
    let pathname = this.props.location.pathname;
    if (window.__POWERED_BY_QIANKUN__ && !pathname.includes("/app-react/")) {
      return <Redirect to="/app-react/home"></Redirect>;
    }

    const targetRouter = Router.find(function (item) {
      return item.path === pathname;
    });
    console.log(targetRouter, "--targetRouter");
    return <Route exact path={pathname} component={targetRouter.component} />;
  }
}

export default RouterConfig;
