import React, {useState} from "react";
import favicon from "../img/logo.png";
import socialGitHub from "../img/social/github.svg";
import socialLinkedIn from "../img/social/linkedin.svg";
import englishJSON from "../data/english";
import spanishJSON from "../data/spanish";
import usaFlag from "../img/usa.png";
import spainFlag from "../img/spain.png";

export default function Header({content, setContent, showHeader, closeHeader, goTo}) {
	const [displaySelector, setDisplaySelector] = useState("none");

	const showSelector = () => {
		setDisplaySelector("flex");
	};

	const hideSelector = () => {
		setDisplaySelector("none");
	};

	const setLanguage = (JSON) => {
		setContent(JSON);
		hideSelector();
		closeHeader();
	};

	return (
		<header className='header' style={{display: showHeader ? "flex" : "none"}}>
			<img className='header-logo' src={favicon} alt='Logo' onClick={() => goTo("home")}></img>
			<nav className='header-sections'>
				<p onClick={() => goTo("about")}>{content.about}</p>
				<p onClick={() => goTo("skills")}>{content.skills}</p>
				<p onClick={() => goTo("experience")}>{content.experience}</p>
				<p onClick={() => goTo("projects")}>{content.projects}</p>
				<p onClick={() => goTo("contact")}>{content.contact}</p>
				<div className='choose-language' onMouseEnter={showSelector} onMouseLeave={hideSelector}>
					<button>
						<img src={content.flag} alt='Language'></img>
						<p>{content.language}</p>
					</button>
					<div className='language-selector' style={{display: displaySelector}}>
						<button onClick={() => setLanguage(englishJSON)}>
							<img src={usaFlag} alt='English'></img>
							<p>English</p>
						</button>
						<button onClick={() => setLanguage(spanishJSON)}>
							<img src={spainFlag} alt='Spanish'></img>
							<p>Español</p>
						</button>
					</div>
				</div>
			</nav>
			<nav className='social-links'>
				<a href='https://github.com/paladinescamila' target='_blank' rel='noreferrer'>
					<img alt='GitHub' src={socialGitHub}></img>
				</a>
				<a href='https://www.linkedin.com/in/paladinescamila' target='_blank' rel='noreferrer'>
					<img alt='LinkedIn' src={socialLinkedIn}></img>
				</a>
			</nav>
		</header>
	);
}
