// displays information about me
import React, { useState, useEffect } from "react";
import "./bubble.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutMe = () => {
  const [isHovered, setIsHovered] = useState(Array(3).fill(false));
  const [randomDelays, setRandomDelays] = useState(Array(5).fill(0));

  useEffect(() => {
    // Function to generate random delays
    const generateRandomDelays = () => {
      return Array(5)
        .fill()
        .map(() => Math.random() * 5); // Adjust the range as needed
    };

    // Initial random delays
    const initialDelays = generateRandomDelays();
    setRandomDelays(initialDelays);
  }, []);

  const yourSliderSettings = {
    dots: true, // Display dots for navigation
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set the autoplay speed in milliseconds
  };

  const bubbleContent = [
    {
      title: "About Me",
      content:
        "Kia Ora! Ricky Syme here – I'm a passionate individual on the cusp of graduating with a Bachelor of Applied Information. Despite my previous role as an orchard hand, my adaptable nature and robust work ethic make me well-suited for a career in web development within the digital technology sector.",
    },
    {
      title: "Career",
      content:
        "My professional journey reflects a fusion of academic dedication and practical experience. As I transition into the tech industry, I bring not only a curious mind and a penchant for innovation but also a love for the outdoors – be it camping, fishing, or hunting. Balancing this with my indoor adventures in gaming and exploring the digital realm, I am ready to contribute a unique perspective to the dynamic landscape of technology.",
    },
    {
      title: "Education",
      content:
        "In my pursuit of knowledge, I'm about to graduate with a Bachelor of Applied Information, setting my sights on web development within the digital technology sector. Unlike my past in manual labor as an orchard hand, I bring to the tech realm a blend of academic resilience and hands-on experience.",
    },
  ];

  const handleMouseEnter = (index) => {
    setIsHovered((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    setIsHovered((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };
  return (
    <div className="section section1" id="about">
      <div className="aboutMe">
        <Slider {...yourSliderSettings}>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`bubble ${isHovered[index] ? "hovered" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{ animationDelay: `${randomDelays[index]}s` }}
            >
              <div className="bubble-content">
                <h3>{bubbleContent[index].title}</h3>
                {isHovered[index] && <p>{bubbleContent[index].content}</p>}
              </div>
            </div>
          ))}

          {/* Icons */}
          {[3, 4].map((index) => (
            <div
              key={index}
              className="bubble"
              style={{ animationDelay: `${randomDelays[index]}s` }}
            >
              <a
                href={
                  index === 3
                    ? "https://github.com/Kakapo115"
                    : "https://www.linkedin.com/in/ricky-syme-b79701232/"
                }
              >
                <img
                  src={index === 3 ? "GitHub-Logo.png" : "linkdin-icon.png"}
                  className={`icon ${index === 3 ? "git" : "linkdin"}`}
                  alt={index === 3 ? "GitHub-Logo" : "linkdin-icon"}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
      <img src="midjour_basecamp_topcut.png" className="img" alt="Base Camp" />
    </div>
  );
};
export default AboutMe;
