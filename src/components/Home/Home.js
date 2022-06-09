import React from "react";
import "./Home.css";
import resume from "../../assets/Shahriar Turag_resume.pdf";

const Home = () => {
    return (
        <div className="home__container">
            <div className="name">
                <h1>Shahriar Turag</h1>
            </div>
            <div className="designation">
                <p>Jr. Frontend Developer</p>
            </div>
            <div className="space-x-5">
                <button className="btn-g">
                    <a href={resume} Value="download">
                        Download Resume
                    </a>
                </button>
                <button className="btn-g">
                    <a href="mailto: shahriarturag.st@gmail.com">Say Hello</a>
                </button>
            </div>
        </div>
    );
};

export default Home;
