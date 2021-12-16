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
import NotFound from "./components/NotFound";

import favicon from "./img/logo.png";
import burgerIcon from "./img/burger.svg";
import closeIcon from "./img/x.svg";

import englishJSON from "./data/english";
import spanishJSON from "./data/spanish";

function App() {
	// Language
	const navLanguage = navigator.language.slice(0, 2);
	const [language, setLanguage] = useState(navLanguage === "es" ? spanishJSON : englishJSON);

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

	// Sections content
	const sections = (
		<>
			<Home language={language.home} />
			<About language={language.about} />
			<Skills language={language.skills} />
			<Experience language={language.experience} />
			<Projects language={language.projects} />
			<Contact language={language.contact} />
			<Footer />
		</>
	);

	return (
		<Router>
			<Header language={language.header} showHeader={showHeader} closeHeader={closeHeader} setLanguage={setLanguage} />
			<div className='sections'>
				<Routes>
					<Route path='/' exact element={sections}></Route>
					<Route path='/about' element={<About language={language.about} />}></Route>
					<Route path='/skills' element={<Skills language={language.skills} />}></Route>
					<Route path='/experience' element={<Experience language={language.experience} />}></Route>
					<Route path='/projects' element={<Projects language={language.projects} />}></Route>
					<Route path='/contact' element={<Contact language={language.contact} />}></Route>
					<Route path='*' element={<NotFound />}></Route>
				</Routes>
			</div>
			<div className='mobile-header'>
				<Link to='/' onClick={closeHeader}>
					<img src={favicon} alt='Logo' className='logo'></img>
				</Link>
				<button className='burger-close' onClick={showHideMenu}>
					{showBurger ? <img src={burgerIcon} alt='Burger menu'></img> : <img src={closeIcon} alt='Close menu'></img>}
				</button>
			</div>
		</Router>
	);
}

export default App;
