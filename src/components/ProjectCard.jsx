import React from "react";
import projectGitHub from "../img/project-github.svg";
import projectWebsite from "../img/project-website.svg";

export default function ProjectCard({project}) {
	return (
		<li className='project-card'>
			<img src={project.photo} alt={project.title} className='project-card-photo' />
			<div className='project-card-data'>
				<p>{project.title}</p>
				<p>{project.description}</p>
				<ul className='project-card-tools'>
					{project.tools.map((t) => (
						<li>{t}</li>
					))}
				</ul>
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
