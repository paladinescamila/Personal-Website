import React, {useState, useRef} from "react";
import "./scss/main.scss";

// Sections
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Icons
import favicon from "./img/logo.png";
import burgerIcon from "./img/burger.svg";
import closeIcon from "./img/x.svg";

// Language data
import englishJSON from "./data/english";
import spanishJSON from "./data/spanish";

// Loader
import Loader from "./components/Loader";

function App() {
	// Set content language
	const language = navigator.language.slice(0, 2);
	const [content, setContent] = useState(language === "es" ? spanishJSON : englishJSON);

	// Show or hide the menu and the header
	const [showBurger, setShowBurger] = useState(true);
	const [showHeader, setShowHeader] = useState(window.innerWidth > 1000);

	const showHideMenu = () => {
		setShowBurger(!showBurger);
		setShowHeader(showBurger);
	};

	const closeHeader = () => {
		setShowHeader(window.innerWidth > 1000);
		setShowBurger(window.innerWidth <= 1000);
	};

	// Sections references
	const references = {
		home: useRef(null),
		about: useRef(null),
		skills: useRef(null),
		experience: useRef(null),
		projects: useRef(null),
		contact: useRef(null),
	};

	const goTo = (section) => {
		references[section].current.scrollIntoView({behavior: "smooth"});
		closeHeader();
	};

	// Update showHeader and showBurger when the page is resized.
	window.onresize = () => {
		setShowHeader(window.innerWidth > 1000);
		setShowBurger(window.innerWidth <= 1000);
	};

	// Set page loader
	const [loading, setLoading] = useState(true);

	window.onload = () => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	return loading ? (
		<Loader />
	) : (
		<>
			<Header content={content.header} setContent={setContent} showHeader={showHeader} closeHeader={closeHeader} goTo={goTo} />
			<div className='sections'>
				<Home content={content.home} refProperty={references.home} />
				<About content={content.about} refProperty={references.about} />
				<Skills content={content.skills} refProperty={references.skills} />
				<Experience content={content.experience} refProperty={references.experience} />
				<Projects content={content.projects} refProperty={references.projects} />
				<Contact content={content.contact} refProperty={references.contact} />
				<Footer />
			</div>
			<div className='mobile-header'>
				<img src={favicon} alt='Logo' className='logo' onClick={() => goTo("home")}></img>
				<img src={showBurger ? burgerIcon : closeIcon} alt='Menu' className='burger-close' onClick={showHideMenu}></img>
			</div>
		</>
	);
}

export default App;
