// displays information about me
import React, { useState } from "react";
import SocialIcons from "./socialIcons.js"; // Import the Social Icons component
import "./bubble.css";

const AboutMe = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="section section1" id="about">
      <div className="aboutMe">
        <div
          className={`bubble ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div className="bubble-content">
            <h3>About Me</h3>
            {isHovered && (
              <p>
                Kia Ora! Ricky Syme here – I'm a passionate individual on the
                cusp of graduating with a Bachelor of Applied Information.
                Despite my previous role as an orchard hand, my adaptable nature
                and robust work ethic make me well-suited for a career in web
                development within the digital technology sector.
              </p>
            )}
          </div>
        </div>
        <div
          className={`bubble ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div className="bubble-content">
            <h3>Career</h3>
            {isHovered && (
              <p>
                My professional journey reflects a fusion of academic dedication
                and practical experience. As I transition into the tech
                industry, I bring not only a curious mind and a penchant for
                innovation but also a love for the outdoors – be it camping,
                fishing, or hunting. Balancing this with my indoor adventures in
                gaming and exploring the digital realm, I am ready to contribute
                a unique perspective to the dynamic landscape of technology.
              </p>
            )}
          </div>
        </div>
        <div
          className={`bubble ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div className="bubble-content">
            <h3>Education</h3>
            {isHovered && (
              <p>
                In my pursuit of knowledge, I'm about to graduate with a
                Bachelor of Applied Information, setting my sights on web
                development within the digital technology sector. Unlike my past
                in manual labor as an orchard hand, I bring to the tech realm a
                blend of academic resilience and hands-on experience. As I step
                into this new chapter, my diverse interests, from outdoor
                activities like camping and fishing to indoor pursuits such as
                gaming, enrich my academic foundation. With a solid grounding
                and a zest for innovation, I am prepared to offer a distinct
                viewpoint to the ever-evolving world of technology.
              </p>
            )}
          </div>
        </div>
      </div>
      <SocialIcons />
      <img src="midjour_basecamp_topcut.png" className="img" alt="Base Camp" />
    </div>
  );
};
export default AboutMe;
