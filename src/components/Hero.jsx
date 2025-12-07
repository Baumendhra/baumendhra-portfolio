import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero">
      <div className="intro">
        <h1>
          Hi, I am <span>Baumendhra</span>
        </h1>
        <p>Software Developer & Problem Solver</p>
        <div className="socials">
          <a href="mailto:baumendhra@gmail.com">
          <img src="./public/assets/mail.svg" alt="email" /></a>
          <a href="https://github.com/Baumendhra">
          <img src="public/github-circle.svg" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/baumendhra-k/">
          <img src="./public/assets/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="/resume.png" download className="resume-btn">
            Download Resume
          </a>

        </div>
      </div>
      <div className="photo">
        <img src="/IMG_20250707_231427.jpg" alt="Baumendhra" />
      </div>
    </header>
  );
};

export default Hero;