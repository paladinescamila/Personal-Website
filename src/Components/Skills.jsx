import React from "react";
import SkillCard from "./SkillCard";
import languagesImage from "../Assets/Images/skill-languages.svg";
import librariesImage from "../Assets/Images/skill-libraries.svg";
import toolsImage from "../Assets/Images/skill-tools.svg";
import skills from "../Services/Constants/skills";

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
