// import logo from "./logo.svg";
import "./css/App.css";

// COMPONENTS
import Sections from "./components/Sections";
import Button from "./components/Button";

function App() {
	return (
		<div className='App'>
			<Sections />
			<Button value='Contact me' />
		</div>
	);
}

export default App;
