import React from 'react';
import {useNavigate} from 'react-router-dom'
function About() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>We are software developers </h1>
            <button onClick={()=> navigate("/student")}>Student</button>
        </div>
    )
}

export default About;