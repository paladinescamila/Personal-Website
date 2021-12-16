import React from "react";
import Button from "./Button";
import cvEnglish from "../data/CV-English.pdf";
import cvSpanish from "../data/CV-Spanish.pdf";
import photo from "../img/profile.png";

export default function About({language}) {
	return (
		<div className='section-container'>
			<h2 className='section-title'>About</h2>
			<div className='about-content'>
				<div>
					<p className='about-text'>
						My name is Camila Paladines, I'm a <p>Computer Science student</p> at Pontificia Universidad Javeriana in Cali, Colombia. I'm a <p>Frontend Development enthusiast</p> and I'm
						passionate about designing and developing web applications that are very useful for people.
					</p>
					<p className='about-text'>
						My goal is to cooperate with the creation of tools that contribute to the development of a person, a company, or a nation. That's why I like to learn new technologies, and use
						them with the mission to improve the world a little bit, one step at a time.
					</p>
					{language === "en" ? <Button value='Download CV' type='ghost' link={cvEnglish} /> : <Button value='Descargar CV' type='ghost' link={cvSpanish} />}
				</div>
				<img src={photo} alt='Camila Paladines'></img>
			</div>
		</div>
	);
}
