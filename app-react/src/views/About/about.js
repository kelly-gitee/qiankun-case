import React, { Component } from "react";
import "./about.css";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setSwipserImgAry: [
        "./img/case/one.jpg",
        "./img/case/two.jpg",
        "./img/case/three.jpg",
      ],
      setSwipserBcolorAry: ["#a3e9f5", "#5b93a5", "#656563"],
      setSwipserBcolor: "#a3e9f5",
    };
  }
  prev() {
    console.log("1");
  }
  next() {
    console.log("2");
  }
  componentDidMount() {}
  render(h) {
    return <div className="case-box">react-about</div>;
  }
}
export default About;
