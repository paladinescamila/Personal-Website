import React from 'react';
import {useNavigation} from './Context/Navigation';
import './Assets/Styles/main.scss';

// Sections
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

// Icons and Components
import Favicon from './Assets/Images/logo.png';
import Loader from './Components/Loader';
import BurgerButton from './Components/BurgerButton';

function App() {
	const {loading, goTo} = useNavigation();

	if (loading) return <Loader />;

	return (
		<>
			<Header />
			<div className='sections'>
				<Home />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
				<Footer />
			</div>
			<div className='mobile-header'>
				<img src={Favicon} alt='Logo' className='logo' onClick={() => goTo('home')} />
				<BurgerButton />
			</div>
		</>
	);
}

export default App;
