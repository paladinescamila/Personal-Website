import React from "react";
import {Link} from "react-router-dom";
import favicon from "../img/logo.png";
import socialGitHub from "../img/social/github.svg";
import socialLinkedIn from "../img/social/linkedin.svg";
import englishJSON from "../data/english";
import spanishJSON from "../data/spanish";

export default function Header({language, setLanguage, displayHeader, closeHeader}) {
	const changeLanguage = (e) => {
		if (e.target.value === "es") setLanguage(spanishJSON);
		else setLanguage(englishJSON);
	};

	return (
		<header className='header' style={{display: displayHeader ? "flex" : "none"}}>
			<Link to='/' onClick={closeHeader}>
				<img src={favicon} alt='Logo' className='header-logo'></img>
			</Link>
			<div className='header-sections'>
				<Link to='/about' onClick={closeHeader}>
					{language.about}
				</Link>
				<Link to='/skills' onClick={closeHeader}>
					{language.skills}
				</Link>
				<Link to='/experience' onClick={closeHeader}>
					{language.experience}
				</Link>
				<Link to='/projects' onClick={closeHeader}>
					{language.projects}
				</Link>
				<Link to='/contact' onClick={closeHeader}>
					{language.contact}
				</Link>
				<select className='language-selector' onChange={changeLanguage}>
					<option value='en'>English</option>
					<option value='es'>Español</option>
				</select>
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
