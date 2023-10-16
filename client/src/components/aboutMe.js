// displays information about me
import React, { useState } from "react";
import SocialIcons from "./socialIcons.js"; // Import the Social Icons component
import "./bubble.css";

const AboutMe = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleHover2 = () => {
    setIsHovered2(!isHovered2);
  };

  const handleHover3 = () => {
    setIsHovered3(!isHovered3);
  };

  return (
    <div className="section section1" id="about">
      <div className="aboutMe backgroundcolooor">
        <div
          className={`bubble ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={{ top: "120px", left: 0 }}
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
          className={`bubble ${isHovered2 ? "hovered" : ""}`}
          onMouseEnter={handleHover2}
          onMouseLeave={handleHover2}
          style={{ top: "120px", left: "120px" }}
        >
          <div className="bubble-content">
            <h3>Career</h3>
            {isHovered2 && (
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
          className={`bubble ${isHovered3 ? "hovered" : ""}`}
          onMouseEnter={handleHover3}
          onMouseLeave={handleHover3}
          style={{ top: "120px", left: "240px" }}
        >
          <div className="bubble-content">
            <h3>Education</h3>
            {isHovered3 && (
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
