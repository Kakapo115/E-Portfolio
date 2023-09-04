// Displays Social Icons
import React, { Component } from "react";

class SocialIcons extends Component {
  render() {
    return (
      <div className="icons">
        <a href="https://github.com/Kakapo115">
          <img src="GitHub-Logo.png" className="icon git" alt="Halfway Climb" />
        </a>
        <a href="https://www.linkedin.com/in/ricky-syme-b79701232/">
          <img
            src="linkdin-icon.png"
            className="icon linkdin"
            alt="Halfway Climb"
          />
        </a>
      </div>
    );
  }
}
export default SocialIcons;
