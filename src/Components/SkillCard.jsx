import React from "react";

export default function SkillCard({image, title, skills}) {
	return (
		<div className='skill-card'>
			<img src={image} alt={title} />
			<p>{title}</p>
			<ul className='tools-list'>
				{skills.map((s) => (
					<li>
						<img src={s.img} alt={s.name}></img>
						<p>{s.name}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
