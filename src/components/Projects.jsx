import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import socialFrontendMentor from "../img/social/frontendmentor.svg";

export default function Projects({content}) {
	return (
		<div className='section-container projects-section'>
			<h2 className='section-title'>{content.title}</h2>
			<ul className='projects-container'>
				{projects.map((p) => (
					<ProjectCard name={p.name} description={content.language === "es" ? p.descriptionES : p.descriptionEN} tools={p.tools} website={p.website} github={p.github} img={p.img} />
				))}
				<a href='https://www.frontendmentor.io/profile/paladinescamila' target='_blank' rel='noreferrer'>
					<img alt='Frontend Mentor' src={socialFrontendMentor}></img>
					{content.frontendMentor}
				</a>
			</ul>
		</div>
	);
}
