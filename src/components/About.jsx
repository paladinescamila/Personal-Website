import React from "react";
import Button from "./Button";
import photo from "../img/profile.png";

export default function About({content}) {
	return (
		<div className='section-container'>
			<h2 className='section-title'>{content.title}</h2>
			<div className='about-content'>
				<div>
					<p className='about-text'>{content.paragraph1}</p>
					<p className='about-text'>{content.paragraph2}</p>
					<Button value={content.cvTitle} type='ghost' link={content.cvFile} />
				</div>
				<div className='about-photo'>
					<img src={photo} alt='Camila Paladines'></img>
				</div>
			</div>
		</div>
	);
}
