import React from "react";

export default function SkillCard({image, title, tools}) {
	let toolHTML = (t) => (
		<li>
			{t[0]}
			<ul>
				<li style={{display: t[2] === 0 ? "block" : "none"}}>Basic</li>
				<li style={{display: t[2] === 1 ? "block" : "none"}}>Intermediate</li>
				<li style={{display: t[2] === 2 ? "block" : "none"}}>Advanced</li>
			</ul>
		</li>
	);
	return (
		<div className='skill-card'>
			<img src={image} alt={title} />
			<p>{title}</p>
			<ul className='tools-list'>{tools.map(toolHTML)}</ul>
		</div>
	);
}
