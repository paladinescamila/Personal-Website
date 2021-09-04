import React from "react";

export default function SkillCard({image, title, tools}) {
	return (
		<div>
			<img src={image} alt={title} />
			<p>{title}</p>
			<ul>
				{tools.map((t) => (
					<li>{t}, </li>
				))}
			</ul>
		</div>
	);
}
