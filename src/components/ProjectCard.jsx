import React from "react";
import projectGitHub from "../img/project-github.svg";
import projectWebsite from "../img/project-website.svg";

export default function ProjectCard({project}) {
	return (
		<li className='project-card'>
			<a href={project.website} className='project-card-photo' target='_blank' rel='noreferrer'>
				<img src={project.img} alt={project.name} />
			</a>
			<div className='project-card-data'>
				<a href={project.website} target='_blank' rel='noreferrer'>
					<p>{project.name}</p>
					<p>{project.description}</p>
				</a>
				<div className='project-tools-and-resources'>
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
			</div>
		</li>
	);
}
