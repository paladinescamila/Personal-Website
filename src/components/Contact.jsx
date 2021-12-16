import React from "react";
import Button from "./Button";
import social from "../data/social";

export default function Contact({language}) {
	return (
		<div className='section-container contact-section'>
			<h2 className='section-title'>{language.title}</h2>
			<p className='contact-text'>{language.content}</p>
			<Button value={language.button} type='solid' link='mailto:camilapaladines27@gmail.com' />
			<div className='all-social-links'>
				{social.map((s) => (
					<a href={s.link} target='_blank' rel='noreferrer' title={s.name}>
						<img alt={s.name} src={s.img}></img>
					</a>
				))}
			</div>
		</div>
	);
}
