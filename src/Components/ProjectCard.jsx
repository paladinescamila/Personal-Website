import React from "react";
import projectGitHub from "../Assets/Images/project-github.svg";
import projectWebsite from "../Assets/Images/project-website.svg";

export default function ProjectCard({name, description, tools, website, github, img}) {
	return (
		<li className='project-card'>
			<a href={website} className='project-card-photo' target='_blank' rel='noreferrer'>
				<img src={img} alt={name} />
			</a>
			<div className='project-card-data'>
				<a href={website} target='_blank' rel='noreferrer'>
					<p>{name}</p>
					<p>{description}</p>
				</a>
				<div className='project-tools-and-resources'>
					<ul className='project-card-tools'>
						{tools.map((t) => (
							<li key={t}>{t}</li>
						))}
					</ul>
					<div className='project-card-resources'>
						<a href={website} target='_blank' rel='noreferrer'>
							<img src={projectWebsite} alt='Website' />
						</a>
						<a href={github} target='_blank' rel='noreferrer'>
							<img src={projectGitHub} alt='GitHub' />
						</a>
					</div>
				</div>
			</div>
		</li>
	);
}
