import React from "react";
import "../css/Contact.css";
import Button from "./Button";
import socialGitHub from '../img/social-github.svg';
import socialLinkedIn from '../img/social-linkedin.svg';
import socialCodepen from '../img/social-codepen.svg';
import socialMedium from '../img/social-medium.svg';

export default function Contact() {
	return (
		<div className='contact-section'>
			<p className='section-title'>Contact</p>
			<p className='section-text contact-text'>
				I am looking for new opportunities to contribute to the industry and grow as a developer. If you have a project you want me to participate in or if you have any questions let me know!
				I'll do my best to answer you.
			</p>
			<Button value='Say hello' type='solid' />
			<p className="contact-follow" >Follow me</p>
			<div className="contact-social" >
				<a href="https://github.com/paladinescamila">
					<img alt="GitHub" src={socialGitHub}></img>
				</a>
				<a href="https://www.linkedin.com/in/paladinescamila">
					<img alt="LinkedIn" src={socialLinkedIn}></img>
				</a>
				<a href="https://codepen.io/paladinescamila">
					<img alt="Codepen" src={socialCodepen}></img>
				</a>
				<a href="https://medium.com/@paladinescamila">
					<img alt="Medium" src={socialMedium}></img>
				</a>
			</div>
		</div>
	);
}
