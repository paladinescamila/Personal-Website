import React from "react";
import "../css/Projects.css";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function Projects() {
	return (
		<div className='section-container'>
			<p className='section-title'>Projects</p>
			<div className='projects-container'>
				{projects.map((p) => (
					<ProjectCard project={p} />
				))}
			</div>
		</div>
	);
}
