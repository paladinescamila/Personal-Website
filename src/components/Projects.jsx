import React from "react";
import "../css/Projects.css";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function Projects() {
	return (
		<div className='projects-section'>
			<p className='section-title'>Projects</p>
			<div className='projects-container'>
				{projects.map((project) => (
					<ProjectCard photo={project.photo} title={project.name} description={project.description} tools={project.tools} github={project.github} website={project.website} />
				))}
			</div>
		</div>
	);
}
