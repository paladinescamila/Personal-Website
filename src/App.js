import React from 'react';
import {useNavigation} from './Context/Navigation';
import './Assets/Styles/main.scss';

// Sections
import Header from './Layouts/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Layouts/Footer';

// Icons
import favicon from './Assets/Images/logo.png';
import burgerIcon from './Assets/Images/burger.svg';
import closeIcon from './Assets/Images/x.svg';

// Loader
import Loader from './Components/Loader';

function App() {
	const {goTo, showBurger, showHideMenu, loading} = useNavigation();

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
				<img src={favicon} alt='Logo' className='logo' onClick={() => goTo('home')} />
				<img
					src={showBurger ? burgerIcon : closeIcon}
					alt='Menu'
					className='burger-close'
					onClick={showHideMenu}
				/>
			</div>
		</>
	);
}

export default App;
