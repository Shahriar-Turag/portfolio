import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about__container">
            <div className="about">
                <h1>About Me</h1>
            </div>
            <div className="description">
                <p>
                    Front-end developer who cares deeply about user experience.{" "}
                    <br />
                    Serious passion for UI design and new technologies.
                </p>
            </div>
        </div>
    );
};

export default About;
