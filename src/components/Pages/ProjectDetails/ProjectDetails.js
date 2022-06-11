import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Data";
import "./ProjectDetails.css";

const ProjectDetails = () => {
    const { id } = useParams();
    const project = data.find((project) => project.id === id);
    const description = project.description.split(".");
    return (
        <div className="m-5 lg:m-20 project__container">
            <h1 className="title">Project Details</h1>
            <div>
                <p className="text-2xl lg:text-5xl">{project.name}</p>
                <p className="text-xl lg:text-3xl ml-6">{project.category}</p>
                <ul className="list-disc ml-10">
                    {description.map((desc) => (
                        <li key={desc}>{desc}</li>
                    ))}
                </ul>
                <div className="neon__btn    lg:space-x-4 my-4">
                    <button className="mr-2 lg:mr-0">
                        <a
                            target="_blank"
                            href={project.client}
                            rel="noreferrer"
                        >
                            GitHub Client
                        </a>
                    </button>
                    <button className="mr-2 lg:mr-0">
                        <a
                            target="_blank"
                            href={project.server}
                            rel="noreferrer"
                        >
                            GitHub Server
                        </a>
                    </button>
                    <button>
                        <a target="_blank" href={project.live} rel="noreferrer">
                            Live Site
                        </a>
                    </button>
                </div>
                <div className="project__image grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {project.image.map((image) => (
                        <img src={image} alt=""></img>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
