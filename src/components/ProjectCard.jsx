import React from "react";
import "../css/ProjectCard.css";
import projectGitHub from "../img/project-github.svg";
import projectWebsite from "../img/project-website.svg";

export default function ProjectCard({photo, title, description, tools, github, website}) {
	return (
		<div className='project-card'>
			<img src={photo} alt={title} />
			<div className='project-card-data'>
				<p className='project-card-title'>{title}</p>
				<p className='project-card-description'>{description}</p>
				<ul className='project-card-tools'>
					{tools.map((t) => (
						<li>{t}</li>
					))}
				</ul>
				<a className='project-card-github' href={github}>
					<img src={projectGitHub} alt='GitHub' />
				</a>
				<a className='project-card-website' href={website}>
					<img src={projectWebsite} alt='Website' />
				</a>
			</div>
		</div>
	);
}
