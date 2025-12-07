import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      
      {/* Left Navigation Panel */}
      <div className="left-panel">
        <h2>Baumendhra</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      {/* Right Scrollable Panel */}
      <div className="right-panel">
        <section id="home" className="section"><Hero /></section>
        <section id="skills" className="section"><Skills /></section>
        <section id="projects" className="section"><Projects /></section>
        <section id="contact" className="section"><Contact /></section>
        <Footer />
      </div>

    </div>
  );
}

export default App;
