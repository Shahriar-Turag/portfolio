import React from "react";
import autoZone from "../../assets/auto-zone.png";
import carBar from "../../assets/car-bar.png";
import travelCations from "../../assets/travelcations.png";

import "./Projects.css";

const Projects = () => {
    return (
        <div className="projects__container">
            <div className="projects">Projects</div>
            <div className="individual__project">
                <p className="num">01</p>
                <div className="px-20 flex justify-between items-center space-x-10">
                    <div className="details">
                        <h1 className="project__title">Auto Zone</h1>
                        <h4>Full stack project</h4>
                        <p>
                            This project is a manufacturer website who sells
                            different kinds of auto parts. <br /> Also have
                            payment gateway.
                        </p>
                        <div className="btn">
                            <button className="btn-g">
                                <a
                                    target="_blank"
                                    href="https://github.com/Shahriar-Turag/auto-zone-client"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            </button>
                            <button className="btn-l">
                                <a
                                    target="_blank"
                                    href="https://auto-zone-fc5b1.web.app/ "
                                    rel="noreferrer"
                                >
                                    Live Site
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="project__img">
                        <img className="shadow-lg" src={autoZone} alt="" />
                    </div>
                </div>
            </div>
            <div className="individual__project">
                <p className="num">02</p>
                <div className="px-20 flex justify-between items-center space-x-9">
                    <div className="details">
                        <h1 className="project__title">CAR BAR</h1>
                        <h4>Full stack project</h4>
                        <p>
                            This project is a warehouse website where seller can
                            stock any amount of cars. <br />
                            Also have firebase authentication system.
                        </p>
                        <div className="btn">
                            <button className="btn-g">
                                <a
                                    target="_blank"
                                    href="https://github.com/Shahriar-Turag/car-bar-client"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            </button>
                            <button className="btn-l">
                                <a
                                    target="_blank"
                                    href="https://car-bar-c9327.web.app/  "
                                    rel="noreferrer"
                                >
                                    Live Site
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="project__img">
                        <img className="shadow-lg" src={carBar} alt="" />
                    </div>
                </div>
            </div>
            <div className="individual__project">
                <p className="num">03</p>
                <div className="px-20 flex justify-between items-center space-x-10">
                    <div className="details">
                        <h1 className="project__title">Travelcations</h1>
                        <h4>React project</h4>
                        <p>
                            This project is a manufacturer website who sells
                            different kinds of auto parts
                        </p>
                        <div className="btn">
                            <button className="btn-g">
                                <a
                                    target="_blank"
                                    href="https://github.com/Shahriar-Turag/travelcations"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            </button>
                            <button className="btn-l">
                                <a
                                    target="_blank"
                                    href="https://tour-guide-7c8c5.web.app/"
                                    rel="noreferrer"
                                >
                                    Live Site
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="project__img">
                        <img className="shadow-lg" src={travelCations} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
