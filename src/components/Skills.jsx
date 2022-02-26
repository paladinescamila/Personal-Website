import React from "react";
import SkillCard from "./SkillCard";
import languagesImage from "../img/skill-languages.svg";
import librariesImage from "../img/skill-libraries.svg";
import toolsImage from "../img/skill-tools.svg";
import skills from "../data/skills";

export default function Skills({content, refProperty}) {
	return (
		<section className='section-container' ref={refProperty}>
			<h2 className='section-title'>{content.title}</h2>
			<div className='about-skills'>
				<SkillCard image={languagesImage} title={content.languages} skills={skills.filter((s) => s.type === 0)} />
				<SkillCard image={librariesImage} title={content.libraries} skills={skills.filter((s) => s.type === 1)} />
				<SkillCard image={toolsImage} title={content.tools} skills={skills.filter((s) => s.type === 2)} />
			</div>
		</section>
	);
}
