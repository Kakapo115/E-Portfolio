// displays information about me
import React, { Component } from "react";
import SocialIcons from "./socialIcons.js"; // Import the Social Icons component

class AboutMe extends Component {
  render() {
    return (
      <div className="section section1" id="about">
        <div className="rightbox aboutMe">
          <h1>About Me</h1>
          <p>
            Kia Ora! Ricky Syme here – I'm on the verge of graduating with a
            Bachelor of Applied Information, and my sights are set on web
            development within the digital technology sector. While my
            professional background leans towards manual labor, where I spent
            time as an orchard hand, my adaptable nature and strong work ethic
            are primed for the tech realm.
          </p>
          <p>
            My journey so far has been a blend of academic perseverance and
            hands-on experience. As I transition into the industry, I bring a
            curious mind, a love for the outdoors – camping, fishing, and
            hunting – and a penchant for indoor adventures like gaming and
            exploring the digital world. With a solid academic foundation and a
            zest for innovation, I'm geared up to contribute my unique
            perspective to the evolving landscape of technology.
          </p>
        </div>
        <SocialIcons />
        <img
          src="midjour_basecamp_topcut.png"
          className="img"
          alt="Base Camp"
        />
      </div>
    );
  }
}
export default AboutMe;
