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
				<SkillCard image={languagesImage} title='Languages' skills={skills.filter((s) => s.type === 0)} />
				<SkillCard image={librariesImage} title='Libraries & Frameworks' skills={skills.filter((s) => s.type === 1)} />
				<SkillCard image={toolsImage} title='Tools & Platforms' skills={skills.filter((s) => s.type === 2)} />
			</div>
		</div>
	);
}
