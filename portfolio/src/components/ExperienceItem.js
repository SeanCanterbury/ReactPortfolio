import React from "react";
import { useNavigate } from "react-router-dom";

function ExperienceItem({image, name, id}) {
    const navigate = useNavigate();
    return (
        <div className="experienceItem" onClick={() => {navigate("/experience/" + id)}}>
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1>{name}</h1>
        </div>
    );
}

export default ExperienceItem;