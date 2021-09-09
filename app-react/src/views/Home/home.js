import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
  }

  render(h) {
    return <div className="trotting-box">react-home</div>;
  }
}
export default Home;
