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
    dots: true, 
    arrows: false,
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToScroll: 1, // Number of slides to scroll at a time
    slidesToShow: 3,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set the autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const bubbleContent = [
    {
      title: "About Me",
      content:
        "Kia Ora! Ricky Syme here – I'm a passionate individual on the cusp of graduating with a Bachelor of Applied Information. My place I call home is in Tauranga in the mighty Bay Of Plenty. My free time is spent either in the digital realm or in nature camping, fishing, and the like. All this is leading me to be a graduating student who is more than ready to get into the workforce and put my skills to use.",
    },
    {
      title: "Career",
      content:
        "My professional journey reflects a fusion of academic dedication and physical labor experience. As I transition into the tech industry, I hope to bring my soft skills from manual labor into the digital industry. All this is leading me to be ready and pumped to enter the industry in any way possible.",
    },
    {
      title: "Education",
      content:
        "In my pursuit of knowledge, I graduated with a Bachelor of Applied Information in mid November 2023. My bachelor gave me a wide range of knowledge in the various areas such as .NET MAUI development, MERN Web development, game development through Unity and Unreal using C# and a little C++, and some other experiences. These combine to give me a wide variety of skills to break out into the industry with.",
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
      <div className="img-container">
        <img
          src="midjour_basecamp_topcut.png"
          className="img"
          alt="Base Camp"
        />
      </div>
    </div>
  );
};
export default AboutMe;
