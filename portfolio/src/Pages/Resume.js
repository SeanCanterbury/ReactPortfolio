import React from 'react'
import resume from '../assets/Resume CS 02_26_24.pdf';


function Projects() {
  return <div className='resume'>
    <h1>Resume</h1>
    <embed src={resume} width="1000px" height="1200px" type="application/pdf"></embed>
    </div>;
}

export default Projects;