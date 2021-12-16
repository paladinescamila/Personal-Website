import React, {useState} from "react";
import {Link} from "react-router-dom";
import favicon from "../img/logo.png";
import socialGitHub from "../img/social/github.svg";
import socialLinkedIn from "../img/social/linkedin.svg";
import englishJSON from "../data/english";
import spanishJSON from "../data/spanish";
import usaFlag from "../img/usa.png";
import spainFlag from "../img/spain.png";

export default function Header({language, showHeader, closeHeader, setLanguage}) {
	const [displaySelector, setDisplaySelector] = useState("none");

	const showSelector = () => {
		setDisplaySelector("flex");
	};

	const setEnglish = () => {
		setLanguage(englishJSON);
		setDisplaySelector("none");
		closeHeader();
	};

	const setSpanish = () => {
		setLanguage(spanishJSON);
		setDisplaySelector("none");
		closeHeader();
	};

	return (
		<header className='header' style={{display: showHeader ? "flex" : "none"}}>
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
				<div className='select-languaje'>
					<p onClick={showSelector}>
						<img src={language.flag} alt='English'></img> {language.language}
					</p>
					<div className='select-languaje-container' style={{display: displaySelector}}>
						<button onClick={setEnglish}>
							<img src={usaFlag} alt='English'></img> English
						</button>
						<button onClick={setSpanish}>
							<img src={spainFlag} alt='Español'></img> Español
						</button>
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
