import React from "react";
import "../css/SkillCard.css";

export default function SkillCard({image, title, tools}) {
	let lastTool = tools[tools.length - 1];

	return (
		<div className='skill-card'>
			<img src={image} alt={title} />
			<p className='skill-card-title'>{title}</p>
			<ul className='skill-card-items'>
				{tools.map((t) => (
					<li>{t === lastTool ? t : t + ", "}</li>
				))}
			</ul>
		</div>
	);
}
