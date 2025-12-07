import React from 'react';
import './SplitScreenLayout.css';

const SplitScreenLayout = ({ children }) => {
  return (
    <div className="split-container">
      {/* Left Side Navigation */}
      <nav className="sidebar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Right Side Content */}
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default SplitScreenLayout;
