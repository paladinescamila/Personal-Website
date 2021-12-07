import React from "react";
import Button from "./Button";
import cvEnglish from "../data/CV-English.pdf";
import photo from "../img/profile.png";

export default function About() {
	return (
		<div className='section-container'>
			<h2 className='section-title'>About</h2>
			<div className='about-content'>
				<div>
					<p className='section-text'>
						My name is Camila Paladines, I'm a <p>Computer Science student</p> at Pontificia Universidad Javeriana in Cali, Colombia. I'm a <p>Frontend Web Development enthusiast</p> and
						I'm passionate about designing and developing web applications that are very useful for people.
					</p>
					<Button value='Download CV' type='ghost' link={cvEnglish} />
				</div>
				<img src={photo} alt='Camila Paladines'></img>
			</div>
		</div>
	);
}
