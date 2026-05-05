import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Flutter Developer",
          "Full Stack Developer",
          "DevOps Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
