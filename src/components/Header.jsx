import React from "react";
import {Link} from "react-router-dom";
import favicon from "../img/logo.png";
import socialGitHub from "../img/social/github.svg";
import socialLinkedIn from "../img/social/linkedin.svg";
import englishJSON from "../data/english";
import spanishJSON from "../data/spanish";

export default function Header({content, setContent, displayHeader, closeHeader}) {
	const changeLanguage = (e) => {
		if (e.target.value === "es") setContent(spanishJSON);
		else setContent(englishJSON);
		closeHeader();
	};

	return (
		<header className='header' style={{display: displayHeader ? "flex" : "none"}}>
			<Link to='/' onClick={closeHeader}>
				<img className='header-logo' src={favicon} alt='Logo'></img>
			</Link>
			<div className='header-sections'>
				<Link to='/about' onClick={closeHeader}>
					{content.about}
				</Link>
				<Link to='/skills' onClick={closeHeader}>
					{content.skills}
				</Link>
				<Link to='/experience' onClick={closeHeader}>
					{content.experience}
				</Link>
				<Link to='/projects' onClick={closeHeader}>
					{content.projects}
				</Link>
				<Link to='/contact' onClick={closeHeader}>
					{content.contact}
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
