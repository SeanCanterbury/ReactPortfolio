import React from 'react'
import "../styles/Home.css";
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import GmailIcon from '@material-ui/icons/Mail';
import portrait from '../assets/portrait.png';
import gradPhoto from '../assets/gradPhoto.png';



function Home() {
  return <div className = "home">
    
    <div className = "about">
    <div className = "photo">
    <img className = "portrait" src= {gradPhoto} />
    </div>
      <h2>Sean Canterbury</h2>
      <div className = "prompt"><p>Welcome to my portfolio! I have a Bachelor of Science in Computer Science as well as a Minor in Mathematics from UNC Charlotte. I have developed a strong foundation of software development skills through my education as well as through development experience you can view on the projects page.</p>
      </div>
    </div>
    <div className = "skills">
      <h1>Skills</h1>
      <ol className = "list">
      <li className='item'>
          <h2>Professional Skills</h2>
          <span>Software Verification and Validation, Unit and Integration Test Development, Hazard/Risk Analysis (dFMEA) </span>
        </li>
        <li className='item'>
          <h2>Front-End</h2>
          <span>HTML, CSS, JavaScript, React, React-Native</span>
        </li>
        <li className='item'>
          <h2>Back-End</h2>
          <span>Django, Flask, SQL, Database-Design, FastAPI, Git/Github, API-Development</span>
        </li>
        <li className='item'>
          <h2>Languages And MISC</h2>
          <span>Java, Python, C, C++, HTML/CSS, JavaScript, Agile-Development</span>
        </li>
        
      </ol>
    </div>
  </div>;

}

export default Home;