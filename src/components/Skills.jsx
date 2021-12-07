import React from "react";
import SkillCard from "./SkillCard";
import languagesImage from "../img/skill-languages.svg";
import librariesImage from "../img/skill-libraries.svg";
import toolsImage from "../img/skill-tools.svg";
import skills from "../data/skills";

export default function Skills() {
	return (
		<div className='section-container'>
			<h2 className='section-title'>Skills</h2>
			<div className='about-skills'>
				<SkillCard image={languagesImage} title='Languages' tools={skills.filter((t) => t[2] === 0)} />
				<SkillCard image={librariesImage} title='Libraries & Frameworks' tools={skills.filter((t) => t[2] === 1)} />
				<SkillCard image={toolsImage} title='Tools & Platforms' tools={skills.filter((t) => t[2] === 2)} />
			</div>
		</div>
	);
}
