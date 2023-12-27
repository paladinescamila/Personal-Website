import React, {useState} from 'react';
import favicon from '../Assets/Images/logo.png';
import socialGitHub from '../Assets/Images/social/github.svg';
import socialLinkedIn from '../Assets/Images/social/linkedin.svg';
import {useLanguage} from '../Context/Language';
import {useNavigation} from '../Context/Navigation';

export default function Header() {
	const [displaySelector, setDisplaySelector] = useState('none');
	const {content, switchToSpanish, switchToEnglish} = useLanguage();
	const {showHeader, closeHeader, goTo, showLoader} = useNavigation();

	// Displays the language selector
	const showSelector = () => setDisplaySelector('flex');

	// Hides the language selector
	const hideSelector = () => setDisplaySelector('none');

	// Changes the language
	const setLanguage = (language) => {
		showLoader(500);
		hideSelector();
		closeHeader();

		if (language === 'es') switchToSpanish();
		else switchToEnglish();
	};

	const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

	return (
		<header className={showHeader ? 'showed-header' : 'hidden-header'}>
			<img
				className='header-logo'
				src={favicon}
				alt='Planet logo'
				onClick={() => goTo('home')}
			/>
			<nav className='header-sections'>
				{sections.map((sectionName) => (
					<p key={sectionName} onClick={() => goTo(sectionName)}>
						{content.header[sectionName]}
					</p>
				))}
				<div
					className='choose-language'
					onMouseEnter={showSelector}
					onMouseLeave={hideSelector}>
					<button>
						<p>{content.header.language}</p>
					</button>
					<div className='language-selector' style={{display: displaySelector}}>
						<button onClick={() => setLanguage('en')}>
							<p>English</p>
						</button>
						<button onClick={() => setLanguage('es')}>
							<p>Español</p>
						</button>
					</div>
				</div>
			</nav>
			<nav className='social-links'>
				<a href='https://github.com/paladinescamila' target='_blank' rel='noreferrer'>
					<img alt='Link to GitHub profile' src={socialGitHub} />
				</a>
				<a
					href='https://www.linkedin.com/in/paladinescamila'
					target='_blank'
					rel='noreferrer'>
					<img alt='Link to LinkedIn profile' src={socialLinkedIn} />
				</a>
			</nav>
		</header>
	);
}
