import React from "react";
import SkillCard from "./SkillCard";
import languagesImage from "../img/skill-languages.svg";
import librariesImage from "../img/skill-libraries.svg";
import toolsImage from "../img/skill-tools.svg";

export default function About() {
	return (
		<div className='section-container'>
			<h2 className='section-title'>About</h2>
			<p className='section-text'>
				My name is Camila Paladines, I'm a Computer Science student at Pontificia Universidad Javeriana in Cali, Colombia. I'm a Frontend Web Development enthusiast and I'm passionate about
				designing and developing web applications that are very useful for people.
			</p>
			<div className='about-skills'>
				<SkillCard image={languagesImage} title='Languages' tools='HTML, CSS, SCSS, JavaScript, Python' />
				<SkillCard image={librariesImage} title='Libraries & Frameworks' tools='React.JS' />
				<SkillCard image={toolsImage} title='Tools & Platforms' tools='Git, Netlify, Firebase, Figma' />
			</div>
		</div>
	);
}
