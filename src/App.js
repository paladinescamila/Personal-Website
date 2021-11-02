import "./scss/App.scss";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<div>
			<Header language='EN' />
			<Banner />
			<About />
			<Experience />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
