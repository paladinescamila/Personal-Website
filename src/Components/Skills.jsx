import React from 'react';
import SkillCard from './SkillCard';
import languagesImage from '../Assets/Images/skill-languages.svg';
import librariesImage from '../Assets/Images/skill-libraries.svg';
import toolsImage from '../Assets/Images/skill-tools.svg';
import skills from '../Services/Constants/skills';
import {useLanguage} from '../Context/Language';
import {useNavigation} from '../Context/Navigation';

export default function Skills({refProperty}) {
	const {content} = useLanguage();
	const {references} = useNavigation();

	return (
		<section className='section-container' ref={references.skills}>
			<h2 className='section-title'>{content.skills.title}</h2>
			<div className='about-skills'>
				<SkillCard
					image={languagesImage}
					title={content.skills.languages}
					skills={skills.filter((s) => s.type === 0)}
				/>
				<SkillCard
					image={librariesImage}
					title={content.skills.libraries}
					skills={skills.filter((s) => s.type === 1)}
				/>
				<SkillCard
					image={toolsImage}
					title={content.skills.tools}
					skills={skills.filter((s) => s.type === 2)}
				/>
			</div>
		</section>
	);
}
