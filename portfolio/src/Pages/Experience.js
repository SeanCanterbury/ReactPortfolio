import React from 'react'
import ExperienceItem from '../components/ExperienceItem';
import '../styles/Experiences.css';
import { experienceList } from '../helpers/ExperienceList';


function Experience() {
  return <div className='Experience'>
    <h1>Professional Experience</h1>
    <div className='experienceList'>
      {experienceList.map((experience , idx) => {
        return<ExperienceItem  id = {idx} name={experience.name} image= {experience.image} />;
      })}
    </div>
    
    </div>;
}

export default Experience;