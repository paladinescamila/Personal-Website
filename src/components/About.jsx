import React from "react";
import Button from "./Button";
import photo from "../img/profile.png";

export default function About({language}) {
	return (
		<div className='section-container'>
			<h2 className='section-title'>{language.title}</h2>
			<div className='about-content'>
				<div>
					<p className='about-text'>{language.contentP1}</p>
					<p className='about-text'>{language.contentP2}</p>
					<Button value={language.cvTitle} type='ghost' link={language.cvFile} />
				</div>
				<img src={photo} alt='Camila Paladines'></img>
			</div>
		</div>
	);
}
