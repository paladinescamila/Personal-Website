import React from "react";

export default function SkillCard({image, title, tools}) {
	let toolHTML = (t) => (
		<li>
			<img src={t[0]} alt={t[1]} title={t[1]}></img>
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
