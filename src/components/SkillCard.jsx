import React from "react";
import "../css/SkillCard.css";

export default function SkillCard({image, title, tools}) {
	return (
		<div className='skill-card'>
			<img src={image} alt={title} />
			<p className='skill-card-title'>{title}</p>
			<p className='skill-card-items'>{tools}</p>
		</div>
	);
}
