// About.js

import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/logo";

function About({ image, aboutText }) {
  const imgSrc = image || "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={imgSrc} alt="blog logo" />
      <p>{aboutText || "About this blog"}</p>
    </aside>
  );
}


export default About;

