import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import socialFrontendMentor from "../img/social/frontendmentor.svg";

export default function Projects() {
	return (
		<div className='section-container projects-section'>
			<h2 className='section-title'>Projects</h2>
			<ul className='projects-container'>
				{projects.map((p) => (
					<ProjectCard project={p} />
				))}
				<a href='https://www.frontendmentor.io/profile/paladinescamila' target='_blank' rel='noreferrer'>
					<img alt='Frontend Mentor' src={socialFrontendMentor}></img>
					More on Frontend Mentor
				</a>
			</ul>
		</div>
	);
}
