// import logo from "./logo.svg";
import "./css/App.css";

// IMAGES
import purpleCalendarImage from "./img/purple-calendar.png";
import Logo from "./components/Logo";

// COMPONENTS
import Header from "./components/Header";
import Button from "./components/Button";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
	return (
		<div className='App'>
			<Header language='EN' />
			<Button value='Solid' type='solid' />
			<Button value='Ghost' type='ghost' />
			<Button value='Empty' type='empty' />
			<Logo width={100} />
			<ProjectCard
				photo={purpleCalendarImage}
				title='Purple Calendar'
				description='This is a simple monthly calendar that allows you to navigate between months. Here you can also go to a specific month and year.'
				tools={["HTML", "CSS", "JavaScript"]}
				github='https://github.com/paladinescamila/Purple-Calendar'
				website='https://purple-calendar.netlify.app/'
			/>
			<About />
			<Experience />
			<Contact />
			<footer className='signature'>
				<p>
					Made with ❤ by{" "}
					<a target='_blanck' href='https://github.com/paladinescamila'>
						Camila Paladines
					</a>
				</p>
			</footer>
		</div>
	);
}

export default App;
