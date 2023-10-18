import React, { useEffect } from "react";
import "./App.css";
//import { setupScroll } from "./scripts/scrollScript"; // Import the scrollScript
import HeaderNav from "./components/headerNav"; // Import Header section
import AboutMe from "./components/aboutMe"; // Import the About Me section
import MyWork from "./components/myWork"; // Import the My Work section
import ContactMe from "./components/contact"; // Import the Contact section
import axios from "axios";

function App() {
  axios.defaults.baseURL = "https://mern-e-portfolio.onrender.com";
  axios.defaults.withCredentials = true;

  // Call the setupScroll function on component mount
  // useEffect(() => {
  //   setupScroll();
  // }, []);

  return (
    <div className="App">
      <HeaderNav />
      <AboutMe />
      <MyWork />
      <ContactMe />
    </div>
  );
}

export default App;
