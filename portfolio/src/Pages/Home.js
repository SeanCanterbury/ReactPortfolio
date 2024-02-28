import React from 'react'
import "../styles/Home.css";
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import GmailIcon from '@material-ui/icons/Mail';
import portrait from '../assets/portrait.png';



function Home() {
  return <div className = "home">
    
    <div className = "about">
    <div className = "photo">
    <img className = "portrait" src= {portrait} />
    </div>
      <h2>Sean Canterbury</h2>
      <div className = "prompt"><p>I'm a senior at UNC Charlotte set to graduate in May 2024. I'm pursuing my BS in Computer Science with a concentration in Software Systems and networks along with a minor in Mathematics.
      </p>
      <LinkedinIcon />
      <GithubIcon />
      <GmailIcon />
      </div>
    </div>
    <div className = "skills">
      <h1>Skills</h1>
      <ol className = "list">
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