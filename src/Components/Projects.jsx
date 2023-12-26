import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../Services/Constants/projects";
import socialFrontendMentor from "../Assets/Images/social/frontend-mentor.svg";

export default function Projects({content, refProperty}) {
	return (
		<section className='section-container projects-section' ref={refProperty}>
			<h2 className='section-title'>{content.title}</h2>
			<ul className='projects-container'>
				{projects.map((p) => (
					<ProjectCard
						key={p.name}
						name={ p.name } description={ content.language === "es" ? p.descriptionES : p.descriptionEN } tools={ p.tools } website={ p.website } github={ p.github } img={ p.img } />
				))}
				<a href='https://www.frontendmentor.io/profile/paladinescamila/solutions' target='_blank' rel='noreferrer'>
					<img alt='Link to Frontend Mentor profile' src={socialFrontendMentor}></img>
					{content.frontendMentor}
				</a>
			</ul>
		</section>
	);
}
