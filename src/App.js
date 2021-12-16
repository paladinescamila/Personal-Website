import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./scss/main.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

import burgerIcon from "./img/burger.svg";
import closeIcon from "./img/x.svg";

function App() {
	// Language
	const navLanguage = navigator.language.slice(0, 2);
	const [language, setLanguage] = useState(navLanguage === "es" ? "es" : "en");
	console.log(language, setLanguage);

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
			<Home />
			<About language={language} />
			<Skills />
			<Experience />
			<Projects />
			<Contact />
		</>
	);

	return (
		<Router>
			<Header showHeader={showHeader} closeHeader={closeHeader} />
			<div className='sections'>
				<Routes>
					<Route path='/' exact element={sections}></Route>
					<Route path='/about' element={<About language={language} />}></Route>
					<Route path='/skills' element={<Skills />}></Route>
					<Route path='/experience' element={<Experience />}></Route>
					<Route path='/projects' element={<Projects />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
					<Route path='*' element={<NotFound />}></Route>
				</Routes>
			</div>
			<button className='burger-close' onClick={showHideMenu}>
				{showBurger ? <img src={burgerIcon} alt='Burger menu'></img> : <img src={closeIcon} alt='Close menu'></img>}
			</button>
		</Router>
	);
}

export default App;
