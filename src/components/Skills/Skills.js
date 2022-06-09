import React from "react";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import react from "../../assets/skills/react.png";
import js from "../../assets/skills/js.png";
import node from "../../assets/skills/node.png";
import firebase from "../../assets/skills/firebase.png";
import mongo from "../../assets/skills/mongo.png";
import "./Skills.css";

const Skills = () => {
    return (
        <div className="skills__container">
            <h1 className="text-7xl text-center my-10">Skills</h1>
            <div className="skills__img">
                <img className="w-12 h-12" src={html} alt="" />
                <img className="w-10 h-12" src={css} alt="" />
                <img className="w-10 h-10" src={js} alt="" />
                <img className="w-11 h-10" src={react} alt="" />
                <img className="w-8 h-11" src={firebase} alt="" />
                <img className="w-13 h-10" src={node} alt="" />
                <img className="w-13 h-10" src={mongo} alt="" />
            </div>
        </div>
    );
};

export default Skills;
