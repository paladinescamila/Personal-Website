import React from "react";

export default function SkillCard({image, title, tools}) {
	return (
		<div className='skill-card'>
			<img src={image} alt={title} />
			<p>{title}</p>
			<p>{tools}</p>
		</div>
	);
}
