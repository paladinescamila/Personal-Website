import React from "react";
import "../css/ProjectCard.css";
import projectGitHub from "../img/project-github.svg";
import projectWebsite from "../img/project-website.svg";

export default function ProjectCard({project}) {
	return (
		<div className='project-card'>
			<a href={project.website} className='project-card-photo'>
				<img src={project.photo} alt={project.title} />
			</a>
			<div className='project-card-data'>
				<a href={project.website} alt={project.title} className='project-card-title'>
					{project.title}
				</a>
				<a href={project.website} alt={project.title} className='project-card-description'>
					{project.description}
				</a>
				<ul className='project-card-tools'>
					{project.tools.map((t) => (
						<li>{t}</li>
					))}
				</ul>
				<a className='project-card-github' href={project.github}>
					<img src={projectGitHub} alt='GitHub' />
				</a>
				<a className='project-card-website' href={project.website}>
					<img src={projectWebsite} alt='Website' />
				</a>
			</div>
		</div>
	);
}
