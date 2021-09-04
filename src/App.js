// import logo from "./logo.svg";
import "./css/App.css";
import purpleCalendarImage from "./img/purple-calendar.png";

// COMPONENTS
import Sections from "./components/Sections";
import Button from "./components/Button";
import Logo from "./components/Logo";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";

function App() {
	return (
		<div className='App'>
			<Sections language='EN' />
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
			<SkillCard image='' title='Languajes' tools={["HTML", "CSS", "Sass", "JavaScript", "Python"]} />
		</div>
	);
}

export default App;
