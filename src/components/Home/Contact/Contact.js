import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact__container">
            <h1 className="text-4xl lg:text-7xl">Contact Me</h1>
            <div className="contact">
                <h4 className="text-xl lg:text-3xl mb-5">Contact Info</h4>
                <div className="contact__info">
                    <h1 className="fas fa-envelope">
                        &nbsp; shahriarturag,st@gmail.com
                    </h1>
                    <h1 className="fas fa-phone"> &nbsp;+880 1580635803</h1>
                    <h1 className="fas fa-map-marker-alt">
                        {" "}
                        &nbsp;Bogura, Bangladesh
                    </h1>
                </div>
            </div>
            <div className="logo ">
                <a
                    target="_blank"
                    href="https://github.com/Shahriar-Turag"
                    rel="noreferrer"
                >
                    <i class="fab fa-github"></i>
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/shahriar-turag-0876881b5/"
                    rel="noreferrer"
                >
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                    target="_blank"
                    href="https://www.facebook.com/shahriar.turag/"
                    rel="noreferrer"
                >
                    <i class="fab fa-facebook"></i>
                </a>
            </div>
        </div>
    );
};

export default Contact;
