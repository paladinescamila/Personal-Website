import React from "react";
import favicon from "../img/logo.png";
import socialGitHub from "../img/social/github.svg";
import socialLinkedIn from "../img/social/linkedin.svg";
import usaFlag from "../img/usa.png";
import spainFlag from "../img/spain.png";

export default function Header({references, showHeader}) {
	let navLanguage = navigator.language.slice(0, 2);
	// ! NO OLVIDAR GO TO HOME EN EL LOGO

	// const goToSection = (ref) => window.scrollTo(0, ref.current.offsetTop)};

	return (
		<header className='header' style={{display: showHeader ? "flex" : "none"}}>
			<img src={favicon} alt='Logo' className='logo'></img>
			<ul className='header-sections'>
				<li>About</li>
				<li>Skills</li>
				<li>Experience</li>
				<li>Projects</li>
				<li>Contact</li>
				<li className='select-languaje'>
					<p>
						<img src={navLanguage === "en" ? usaFlag : spainFlag} alt='English'></img> {navLanguage.toUpperCase()}
					</p>
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
