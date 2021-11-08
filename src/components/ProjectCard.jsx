import React from "react";
import projectGitHub from "../img/project-github.svg";
import projectWebsite from "../img/project-website.svg";

export default function ProjectCard({project}) {
	return (
		<li className='project-card'>
			<a href={project.website} alt={project.title} className='project-card-photo'>
				<img src={project.photo} alt={project.title} />
			</a>
			<div className='project-card-data'>
				<a href={project.website} alt={project.title}>
					<p>{project.title}</p>
					<p>{project.description}</p>
					<ul className='project-card-tools'>
						{project.tools.map((t) => (
							<li>{t}</li>
						))}
					</ul>
				</a>
				<div className='project-card-resources'>
					<a href={project.website} target='_blank' rel='noreferrer'>
						<img src={projectWebsite} alt='Website' />
					</a>
					<a href={project.github} target='_blank' rel='noreferrer'>
						<img src={projectGitHub} alt='GitHub' />
					</a>
				</div>
			</div>
		</li>
	);
}
