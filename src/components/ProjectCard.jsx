import React from "react";

export default function ProjectCard({photo, title, description, tools, github, website}) {
	return (
		<div>
			<img src={photo} alt={title} />
			<p>{title}</p>
			<p>{description}</p>
			<ul>
				{tools.map((t) => (
					<li>{t}</li>
				))}
			</ul>
		</div>
	);
}
