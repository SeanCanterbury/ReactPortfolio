import React from 'react'
import resume from '../assets/Resume CS 2025.pdf'


function Projects() {
  const isMobile = window.innerWidth <= 768; // Basic mobile detection
  return (
    <div className="resume">
      <h1>Resume</h1>
      {isMobile ? (
        <p>
          The resume is best viewed on a larger screen.{' '}
          <a href={resume} download>
            Download Resume
          </a>
        </p>
      ) : (
        <embed src={resume} width="1000px" height="1200px" type="application/pdf"></embed>
      )}
    </div>
  );
}


export default Projects;