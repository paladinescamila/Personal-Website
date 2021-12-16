import React from "react";
import {Link} from "react-router-dom";
import favicon from "../img/logo.png";
import socialGitHub from "../img/social/github.svg";
import socialLinkedIn from "../img/social/linkedin.svg";
import usaFlag from "../img/usa.png";
import spainFlag from "../img/spain.png";

export default function Header({showHeader}) {
	let navLanguage = navigator.language.slice(0, 2);

	return (
		<header className='header' style={{display: showHeader ? "flex" : "none"}}>
			<Link to='/'>
				<img src={favicon} alt='Logo' className='logo'></img>
			</Link>
			<div className='header-sections'>
				<Link to='/about'>About</Link>
				<Link to='/skills'>Skills</Link>
				<Link to='/experience'>Experience</Link>
				<Link to='/projects'>Projects</Link>
				<Link to='/contact'>Contact</Link>
				<div className='select-languaje'>
					<p>
						<img src={navLanguage === "en" ? usaFlag : spainFlag} alt='English'></img> {navLanguage.toUpperCase()}
					</p>
					<div className='select-languaje-container'>
						<button>ENGLISH</button>
						<button>SPANISH</button>
					</div>
				</div>
			</div>
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
