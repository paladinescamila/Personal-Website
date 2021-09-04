import React from "react";
import "../css/ProjectCard.css";

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
			</div>
		</div>
	);
}
