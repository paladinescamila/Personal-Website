import "./css/App.css";

// COMPONENTS
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
	return (
		<div className='App'>
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
