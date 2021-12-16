import React from "react";
import Button from "./Button";
import social from "../data/social";

export default function Contact() {
	return (
		<div className='section-container contact-section'>
			<h2 className='section-title'>Contact</h2>
			<p className='contact-text'>
				I am looking for new opportunities to contribute to the industry and grow as a developer. If you have a project you want me to participate in or if you have any questions let me know!
				I'll do my best to answer you.
			</p>
			<Button value='Say hello' type='solid' link='mailto:camilapaladines27@gmail.com' />
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
