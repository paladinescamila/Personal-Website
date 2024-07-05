import React from 'react';
import SkillCard from './SkillCard';
import LanguagesImage from '../Assets/Images/components/LanguagesImage';
import LibrariesImage from '../Assets/Images/components/LibrariesImage';
import ToolsImage from '../Assets/Images/components/ToolsImage';
import {skills} from '../Constants/skills';
import {useLanguage} from '../Context/Language';
import {useNavigation} from '../Context/Navigation';

export default function Skills() {
	const {content} = useLanguage();
	const {references} = useNavigation();

	return (
		<section className='section-container' ref={references.skills}>
			<h2 className='section-title'>{content.skills.title}</h2>
			<div className='about-skills'>
				<SkillCard
					image={LanguagesImage}
					title={content.skills.languages}
					skills={skills.languages}
				/>
				<SkillCard
					image={LibrariesImage}
					title={content.skills.libraries}
					skills={skills.libraries}
				/>
				<SkillCard image={ToolsImage} title={content.skills.tools} skills={skills.tools} />
			</div>
		</section>
	);
}
