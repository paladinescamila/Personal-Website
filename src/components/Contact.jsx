import React from "react";
import Button from "./Button";
import Footer from "./Footer";
import socialGitHub from "../img/social-github.svg";
import socialLinkedIn from "../img/social-linkedin.svg";
import socialCodepen from "../img/social-codepen.svg";
import socialFrontendMentor from "../img/social-frontendmentor.svg";
import socialMedium from "../img/social-medium.svg";

export default function Contact() {
	return (
		<div className='section-container contact-section'>
			<h2 className='section-title'>Contact</h2>
			<p className='section-text'>
				I am looking for new opportunities to contribute to the industry and grow as a developer. If you have a project you want me to participate in or if you have any questions let me know!
				I'll do my best to answer you.
			</p>
			<Button value='Say hello' type='solid' link='mailto:camilapaladines27@gmail.com' />
			<div className='social-links'>
				<a href='https://github.com/paladinescamila' target='_blank' rel='noreferrer'>
					<img alt='GitHub' src={socialGitHub}></img>
				</a>
				<a href='https://www.linkedin.com/in/paladinescamila' target='_blank' rel='noreferrer'>
					<img alt='LinkedIn' src={socialLinkedIn}></img>
				</a>
				<a href='https://codepen.io/paladinescamila' target='_blank' rel='noreferrer'>
					<img alt='Codepen' src={socialCodepen}></img>
				</a>
				<a href='https://www.frontendmentor.io/profile/paladinescamila' target='_blank' rel='noreferrer'>
					<img alt='Frontend Mentor' src={socialFrontendMentor}></img>
				</a>
				<a href='https://medium.com/@paladinescamila' target='_blank' rel='noreferrer'>
					<img alt='Medium' src={socialMedium}></img>
				</a>
			</div>
			<Footer />
		</div>
	);
}
