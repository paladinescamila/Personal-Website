import React, {useState, useRef} from "react";
import "./scss/main.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import favicon from "./img/logo.png";
import burgerIcon from "./img/burger.svg";
import closeIcon from "./img/x.svg";

import englishJSON from "./data/english";
import spanishJSON from "./data/spanish";

function App() {
	// Language
	const language = navigator.language.slice(0, 2);
	const [content, setContent] = useState(language === "es" ? spanishJSON : englishJSON);

	// Show or hide the menu
	const [showBurger, setShowBurger] = useState(true);
	const [showHeader, setShowHeader] = useState(window.innerWidth > 1000);

	const showHideMenu = () => {
		setShowBurger(!showBurger);
		setShowHeader(showBurger);
	};

	// Close the header
	const closeHeader = () => {
		setShowHeader(window.innerWidth > 1000);
		setShowBurger(window.innerWidth <= 1000);
	};

	// Section references
	const references = {
		home: useRef(null),
		about: useRef(null),
		skills: useRef(null),
		experience: useRef(null),
		projects: useRef(null),
		contact: useRef(null),
	};

	const goTo = (reference) => {
		reference.current.scrollIntoView();
		closeHeader();
	};

	return (
		<>
			<Header content={content.header} setContent={setContent} showHeader={showHeader} closeHeader={closeHeader} goTo={goTo} references={references} />
			<div className='sections'>
				<Home content={content.home} refProperty={references.home} />
				<About content={content.about} refProperty={references.about} />
				<Skills content={content.skills} refProperty={references.skills} />
				<Experience content={content.experience} refProperty={references.experience} />
				<Projects content={content.projects} refProperty={references.projects} />
				<Contact content={content.contact} refProperty={references.contact} />
				<Footer />
			</div>
			<div className='mobile-header home-padding'>
				<img src={favicon} alt='Logo' className='logo' onClick={() => goTo(references.home)}></img>
				<button className='burger-close' onClick={showHideMenu}>
					{showBurger ? <img src={burgerIcon} alt='Burger menu'></img> : <img src={closeIcon} alt='Close menu'></img>}
				</button>
			</div>
		</>
	);
}

export default App;
