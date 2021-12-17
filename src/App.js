import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
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
	const [displayBurger, setDisplayBurger] = useState(true);
	const [displayHeader, setDisplayHeader] = useState(window.innerWidth > 1000);
	const showHideMenu = () => {
		setDisplayBurger(!displayBurger);
		setDisplayHeader(displayBurger);
	};

	// Close the header
	const closeHeader = () => {
		setDisplayHeader(window.innerWidth > 1000);
		setDisplayBurger(window.innerWidth <= 1000);
	};

	// Sections content
	const sections = (
		<>
			<Home content={content.home} />
			<About content={content.about} />
			<Skills content={content.skills} />
			<Experience content={content.experience} />
			<Projects content={content.projects} />
			<Contact content={content.contact} />
			<Footer />
		</>
	);

	return (
		<Router>
			<Header content={content.header} setContent={setContent} displayHeader={displayHeader} closeHeader={closeHeader} />
			<div className='sections'>
				<Routes>
					<Route path='/' exact element={sections}></Route>
					<Route path='/about' element={<About content={content.about} />}></Route>
					<Route path='/skills' element={<Skills content={content.skills} />}></Route>
					<Route path='/experience' element={<Experience content={content.experience} />}></Route>
					<Route path='/projects' element={<Projects content={content.projects} />}></Route>
					<Route path='/contact' element={<Contact content={content.contact} />}></Route>
				</Routes>
			</div>
			<div className='mobile-header home-padding'>
				<Link to='/' onClick={closeHeader}>
					<img src={favicon} alt='Logo' className='logo'></img>
				</Link>
				<button className='burger-close' onClick={showHideMenu}>
					{displayBurger ? <img src={burgerIcon} alt='Burger menu'></img> : <img src={closeIcon} alt='Close menu'></img>}
				</button>
			</div>
		</Router>
	);
}

export default App;
