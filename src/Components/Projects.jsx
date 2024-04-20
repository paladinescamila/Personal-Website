import React from 'react';
import ProjectCard from './ProjectCard';
import {projects} from '../Constants/projects';
import SocialFrontendMentor from '../Assets/Images/social/frontend-mentor.svg';
import {useLanguage} from '../Context/Language';
import {useNavigation} from '../Context/Navigation';

export default function Projects({refProperty}) {
	const {content} = useLanguage();
	const {references} = useNavigation();
	const {language} = content.projects;

	return (
		<section className='section-container projects-section' ref={references.projects}>
			<h2 className='section-title'>{content.projects.title}</h2>
			<ul className='projects-container'>
				{projects.map((p) => (
					<ProjectCard
						key={p.name}
						name={p.name}
						description={language === 'es' ? p.descriptionES : p.descriptionEN}
						tools={p.tools}
						website={p.website}
						github={p.github}
						img={p.img}
					/>
				))}
				<a
					href='https://www.frontendmentor.io/profile/paladinescamila/solutions'
					target='_blank'
					rel='noreferrer'>
					<img alt='Link to Frontend Mentor profile' src={SocialFrontendMentor} />
					{content.projects.frontendMentor}
				</a>
			</ul>
		</section>
	);
}
