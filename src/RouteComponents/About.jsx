// About.js
import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <h2>About</h2>
      <button onClick={() => navigate("/gs")}>click</button>
    </>
  );
}

export default About;
