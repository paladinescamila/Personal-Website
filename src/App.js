import React, {useState, useRef} from "react";
import "./scss/main.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import burgerIcon from "./img/burger.svg";
import closeIcon from "./img/x.svg";

function App() {
	// Language
	let navLanguage = navigator.language.slice(0, 2);
	let [language, setLanguage] = useState(navLanguage === "en" ? "en" : "es");
	console.log(language, setLanguage);

	// Navigation
	const aboutRef = useRef(null);
	const references = {about: aboutRef};
	console.log(aboutRef);

	// Show or hide the menu
	let [showBurger, setShowBurger] = useState(true);
	let [showHeader, setShowHeader] = useState(window.innerWidth > 1000);
	const showHideMenu = () => {
		setShowBurger(!showBurger);
		setShowHeader(showBurger);
	};

	return (
		<>
			<Header references={references} showHeader={showHeader} />
			<div className='sections'>
				<Home />
				<About language={language} reference={aboutRef} />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
			</div>
			<button className='burger-close' onClick={showHideMenu}>
				{showBurger ? <img src={burgerIcon} alt='Burger menu'></img> : <img src={closeIcon} alt='Close menu'></img>}
			</button>
		</>
	);
}

export default App;
