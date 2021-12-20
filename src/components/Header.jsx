import React from "react";
import favicon from "../img/logo.png";
import socialGitHub from "../img/social/github.svg";
import socialLinkedIn from "../img/social/linkedin.svg";
import englishJSON from "../data/english";
import spanishJSON from "../data/spanish";

export default function Header({content, setContent, showHeader, closeHeader, goTo, references}) {
	const changeLanguage = (e) => {
		if (e.target.value === "es") setContent(spanishJSON);
		else setContent(englishJSON);
		closeHeader();
	};

	return (
		<header className='header' style={{display: showHeader ? "flex" : "none"}}>
			<img className='header-logo' src={favicon} alt='Logo' onClick={() => goTo(references.home)}></img>
			<div className='header-sections'>
				<p onClick={() => goTo(references.about)}>{content.about}</p>
				<p onClick={() => goTo(references.skills)}>{content.skills}</p>
				<p onClick={() => goTo(references.experience)}>{content.experience}</p>
				<p onClick={() => goTo(references.projects)}>{content.projects}</p>
				<p onClick={() => goTo(references.contact)}>{content.contact}</p>
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
