import React, {useState, useRef} from "react";
import "./scss/main.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	// Language
	let navLanguage = navigator.language.slice(0, 2);
	let [language, setLanguage] = useState(navLanguage === "en" ? "en" : "es");
	console.log(language, setLanguage);

	// Navigation
	const aboutRef = useRef(null);
	const references = {about: aboutRef};
	console.log(aboutRef);

	return (
		<>
			<Header references={references} />
			<div className='sections'>
				<Home />
				<About language={language} reference={aboutRef} />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
			</div>
		</>
	);
}

export default App;
