import React from 'react';

export default function SkillCard({image, title, skills}) {
	return (
		<div className='skill-card'>
			<img src={image} alt={title} />
			<p>{title}</p>
			<ul className='tools-list'>
				{skills.map((s) => (
					<li key={s.name}>
						<div>
							<img src={s.img} alt={s.name} />
						</div>
						<p>{s.name}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
