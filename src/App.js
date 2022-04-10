import React, {useState, useRef} from "react";
import "./Assets/Styles/main.scss";

// Sections
import Header from "./Layouts/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Layouts/Footer";

// Icons
import favicon from "./Assets/Images/logo.png";
import burgerIcon from "./Assets/Images/burger.svg";
import closeIcon from "./Assets/Images/x.svg";

// Language data
import englishJSON from "./Services/Constants/english";
import spanishJSON from "./Services/Constants/spanish";

// Loader
import Loader from "./Components/Loader";

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

	const showLoader = (time) => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, time);
	};

	window.onload = () => showLoader(1000);

	return loading ? (
		<Loader />
	) : (
		<>
			<Header content={content.header} setContent={setContent} showHeader={showHeader} closeHeader={closeHeader} goTo={goTo} showLoader={showLoader} />
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
