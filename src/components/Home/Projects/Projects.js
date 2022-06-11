import { Link } from "react-router-dom";
import { data } from "../../Data";

import "./Projects.css";

const Projects = () => {
    return (
        <div className="projects__container m-10 lg:m-0 ">
            <div className="projects ">
                <h1>Projects</h1>
            </div>
            {data.map((project) => (
                <div
                    key={project.id}
                    project={project}
                    className="individual__project"
                >
                    <p className="num">{project.id}</p>
                    <div className="px-0 lg:px-20 flex justify-between items-center flex-col lg:flex-row lg:space-x-10 space-x-0">
                        <div className="details">
                            <h1 className="project__title">{project.name}</h1>
                            <h4>{project.category}</h4>
                            <p>{project.description.slice(0, 70)}...</p>
                            <div className="btn flex flex-col lg:flex-row space-y-3 lg:space-y-0">
                                <Link to={`/projects/${project.id}`}>
                                    <button className="details__btn">
                                        Details
                                    </button>
                                </Link>
                                <div>
                                    <button className="neon__btn">
                                        <a
                                            target="_blank"
                                            href={project.live}
                                            rel="noreferrer"
                                        >
                                            Live Site
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="project__img">
                            <img
                                className="shadow-lg"
                                src={project.image}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
