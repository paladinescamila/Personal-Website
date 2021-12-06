import "./scss/main.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<>
			<Header language='EN' />
			<div className='sections'>
				<Home />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
			</div>
		</>
	);
}

export default App;
