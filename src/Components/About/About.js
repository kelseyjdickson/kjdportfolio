import React from "react";
import hg from ".//happy-girl.jpeg";
import kel from "./IMG_3949.jpg";

const About = () => {
  return (
    <div>
      <h1 className="header-name">Hello</h1>
      <div className="photo-container">
        <img className="happy" src={hg} alt="happygirl" />
        <img className="kelsey" src={kel} alt="profile of kelsey" />
      </div>
      <div className="content">
        <h2 className="header-name">I'm Kelsey.</h2>
        <h3 className="header-name">
          With two years of experience in software engineering, I am a
          passionate learner committed to continual growth. Armed with strong
          communication skills, I thrive on challenges and enjoy a dynamic, fun
          work environment. My dedication extends to fostering growth within
          safe and collaborative settings. From coding to problem-solving, I
          bring a proactive and adaptable approach to every project. Eager to
          contribute my technical experience and collaborative spirit to
          innovative teams, I am poised to embrace new challenges in the
          ever-evolving landscape of software engineering. Let's create, learn,
          and grow together.
        </h3>
      </div>
    </div>
  );
};

export default About;
