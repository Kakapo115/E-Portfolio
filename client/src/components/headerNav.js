// Header/Navigation
import React, { Component } from "react";

class HeaderNav extends Component {
  render() {
    return (
      <div className="header">
        <h1>E-Portfolio</h1>
        <div className="header-right">
          <a href="#about">
            <h2>About</h2>
          </a>
          <h2> | </h2>
          <a href="#work">
            <h2>My Work</h2>
          </a>
          <h2> | </h2>
          <a href="#contact">
            <h2>Contact</h2>
          </a>
        </div>
      </div>
    );
  }
}
export default HeaderNav;
