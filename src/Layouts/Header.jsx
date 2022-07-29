import React, {useState} from "react";
import favicon from "../Assets/Images/logo.png";
import socialGitHub from "../Assets/Images/social/github.svg";
import socialLinkedIn from "../Assets/Images/social/linkedin.svg";
import englishJSON from "../Services/Constants/english";
import spanishJSON from "../Services/Constants/spanish";

export default function Header({content, setContent, showHeader, closeHeader, goTo, showLoader}) {
	const [displaySelector, setDisplaySelector] = useState("none");

	// Displays the language selector
	const showSelector = () => {
		setDisplaySelector("flex");
	};

	// Hides the language selector
	const hideSelector = () => {
		setDisplaySelector("none");
	};

	// Changes the language
	const setLanguage = (JSON) => {
		showLoader(500);
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
