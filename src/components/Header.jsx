import React from "react";
import favicon from "../img/logo.png";
import socialGitHub from "../img/social-github.svg";
import socialLinkedIn from "../img/social-linkedin.svg";

export default function Header({language}) {
	return (
		<header className='header'>
			<img src={favicon} alt='Logo' className='logo'></img>
			<ul className='header-sections'>
				<li>About</li>
				<li>Skills</li>
				<li>Experience</li>
				<li>Projects</li>
				<li>Contact</li>
				<li className='select-languaje'>
					<p>{language}</p>
					<div className='select-languaje-container'>
						<button>ENGLISH</button>
						<button>SPANISH</button>
					</div>
				</li>
			</ul>
			<div className='social-links'>
				<a href='https://github.com/paladinescamila' target='_blank' rel='noreferrer'>
					<img alt='GitHub' src={socialGitHub}></img>
				</a>
				<a href='https://www.linkedin.com/in/paladinescamila' target='_blank' rel='noreferrer'>
					<img alt='LinkedIn' src={socialLinkedIn}></img>
				</a>
			</div>
		</header>
	);
}
