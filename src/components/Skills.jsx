import React from "react";
import SkillCard from "./SkillCard";
import languagesImage from "../img/skill-languages.svg";
import librariesImage from "../img/skill-libraries.svg";
import toolsImage from "../img/skill-tools.svg";
import skills from "../data/skills";

export default function Skills({language}) {
	return (
		<div className='section-container'>
			<h2 className='section-title'>{language.title}</h2>
			<div className='about-skills'>
				<SkillCard image={languagesImage} title={language.languagesCard} skills={skills.filter((s) => s.type === 0)} />
				<SkillCard image={librariesImage} title={language.librariesCard} skills={skills.filter((s) => s.type === 1)} />
				<SkillCard image={toolsImage} title={language.toolsCard} skills={skills.filter((s) => s.type === 2)} />
			</div>
		</div>
	);
}
