import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Agri Platform',
    description: 'Django based platform to connect farmers and buyers.',
    link: 'https://github.com/Baumendhra/agri_platform',
  },
  {
    title: 'Weather App',
    description: 'Simple weather checker using Python API integration.',
    link: 'https://github.com/Baumendhra/Weather-app',
  },
  // {
  //   title: 'Bus Reservation',
  //   description: 'Console-based bus reservation system written in C.',
  //   link: 'https://github.com/yourgithub/bus-reservation',
  // },
  {
    title: 'Expense Tracker',
    description: 'A responsive and user-friendly web application built with React.js for managing personal expenses with ease',
    link: 'https://github.com/Baumendhra/expense-tracker',
  },
];
const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;