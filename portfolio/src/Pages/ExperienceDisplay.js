import React from "react";
import { useParams } from "react-router-dom";
import { experienceList } from "../helpers/ExperienceList";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/ExperienceDisplay.css";

function ExperienceDisplay() {
    const { id } = useParams();
    const experience = experienceList[id];
    return <div className = "experience">
        <h1> {experience.name} </h1>
        <img src = {experience.image} />
        <p> {experience.dates} </p>
        <p>{experience.description} </p>
    </div>;
}

export default ExperienceDisplay;