import React from "react";

export default function SkillCard({image, title, skills}) {
	let toolHTML = (s) => (
		<li>
			<img src={s.img} alt={s.name} title={s.name}></img>
		</li>
	);
	return (
		<div className='skill-card'>
			<img src={image} alt={title} />
			<p>{title}</p>
			<ul className='tools-list'>{skills.map(toolHTML)}</ul>
		</div>
	);
}
