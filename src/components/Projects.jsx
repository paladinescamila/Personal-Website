import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function Projects() {
	return (
		<div className='section-container'>
			<h2 className='section-title'>Projects</h2>
			<div className='projects-container'>
				{projects.map((p) => (
					<ProjectCard project={p} />
				))}
			</div>
		</div>
	);
}
