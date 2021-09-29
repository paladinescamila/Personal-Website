import React from "react";
import "../css/About.css";
import SkillCard from "./SkillCard";
import languagesImage from "../img/skill-languages.svg";
import librariesImage from "../img/skill-libraries.svg";
import toolsImage from "../img/skill-tools.svg";

export default function About() {
	return (
		<div className='section-container'>
			<p className='section-title'>About</p>
			<p className='section-text about-text'>
				My name is Camila Paladines, I am a Frontend Web Developer, Computer Science degree at Pontificia Universidad Javeriana in Cali, Colombia. I am passionate about designing and
				developing web applications that are very useful for people.
			</p>
			<div className='about-skills'>
				<SkillCard image={languagesImage} title='Languages' tools="HTML, CSS, Sass, JavaScript, Python" />
				<SkillCard image={librariesImage} title='Libraries & Frameworks' tools="React.JS" />
				<SkillCard image={toolsImage} title='Tools & Platforms' tools="Git, Netlify, Firebase" />
			</div>
		</div>
	);
}
