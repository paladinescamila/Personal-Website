/*
    Type
    0 -> Languages
    1 -> Libraries & Frameworks
    2 -> Tools & Platforms

    Level
    0 -> Basic
    1 -> Intermediate
    2 -> Advanced
*/

import html from "../img/skills/html.png";
import css from "../img/skills/css.png";
import scss from "../img/skills/scss.png";
import js from "../img/skills/js.png";
import python from "../img/skills/python.png";
import react from "../img/skills/react.png";
import git from "../img/skills/git.png";
import netlify from "../img/skills/netlify.png";
import firebase from "../img/skills/firebase.png";
import figma from "../img/skills/figma.png";
import scrum from "../img/skills/scrum.png";

const skills = [
	{name: "HTML", img: html, type: 0, level: 1},
	{name: "CSS", img: css, type: 0, level: 1},
	{name: "SCSS", img: scss, type: 0, level: 0},
	{name: "JavaScript", img: js, type: 0, level: 1},
	{name: "Python", img: python, type: 0, level: 1},
	{name: "React.js", img: react, type: 1, level: 0},
	{name: "Git", img: git, type: 2, level: 0},
	{name: "Netlify", img: netlify, type: 2, level: 0},
	{name: "Firebase", img: firebase, type: 2, level: 0},
	{name: "Figma", img: figma, type: 2, level: 0},
	{name: "Scrum", img: scrum, type: 2, level: 1},
];

export default skills;
