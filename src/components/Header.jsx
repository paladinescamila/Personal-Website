import React, {useState} from "react";
import favicon from "../img/logo.png";
import socialGitHub from "../img/social/github.svg";
import socialLinkedIn from "../img/social/linkedin.svg";
import englishJSON from "../data/english";
import spanishJSON from "../data/spanish";

export default function Header({content, setContent, showHeader, closeHeader, goTo, showLoader}) {
	const [displaySelector, setDisplaySelector] = useState("none");

	const showSelector = () => {
		setDisplaySelector("flex");
	};

	const hideSelector = () => {
		setDisplaySelector("none");
	};

	const setLanguage = (JSON) => {
		showLoader();
		setContent(JSON);
		hideSelector();
		closeHeader();
	};

	return (
		<header className='header' style={{display: showHeader ? "flex" : "none"}}>
			<img className='header-logo' src={favicon} alt='Planet logo' onClick={() => goTo("home")}></img>
			<nav className='header-sections'>
				<p onClick={() => goTo("about")}>{content.about}</p>
				<p onClick={() => goTo("skills")}>{content.skills}</p>
				<p onClick={() => goTo("experience")}>{content.experience}</p>
				<p onClick={() => goTo("projects")}>{content.projects}</p>
				<p onClick={() => goTo("contact")}>{content.contact}</p>
				<div className='choose-language' onMouseEnter={showSelector} onMouseLeave={hideSelector}>
					<button>
						<p>{content.language}</p>
					</button>
					<div className='language-selector' style={{display: displaySelector}}>
						<button onClick={() => setLanguage(englishJSON)}>
							<p>English</p>
						</button>
						<button onClick={() => setLanguage(spanishJSON)}>
							<p>Español</p>
						</button>
					</div>
				</div>
			</nav>
			<nav className='social-links'>
				<a href='https://github.com/paladinescamila' target='_blank' rel='noreferrer'>
					<img alt='Link to GitHub profile' src={socialGitHub}></img>
				</a>
				<a href='https://www.linkedin.com/in/paladinescamila' target='_blank' rel='noreferrer'>
					<img alt='Link to LinkedIn profile' src={socialLinkedIn}></img>
				</a>
			</nav>
		</header>
	);
}
