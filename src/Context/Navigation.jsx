import React, {createContext, useContext, useEffect, useState, useRef} from 'react';

const LanguageContext = createContext({});

export function NavigationProvider({children}) {
	// Navigation between sections
	const [section, setSection] = useState('home');

	// Sections references
	const references = {
		home: useRef(null),
		about: useRef(null),
		skills: useRef(null),
		experience: useRef(null),
		projects: useRef(null),
		contact: useRef(null),
	};

	const goTo = (section) => {
		references[section].current.scrollIntoView({behavior: 'smooth'});
		setSection(section);
		closeHeader();
	};

	useEffect(() => {
		const showHideMenuOnResize = () => {
			setShowHeader(window.innerWidth > 1000);
			setShowBurger(window.innerWidth <= 1000);
		};

		window.addEventListener('resize', showHideMenuOnResize);

		return () => window.removeEventListener('resize', showHideMenuOnResize);
	}, []);

	// Show or hide the menu and the header
	const [showBurger, setShowBurger] = useState(true);
	const [showHeader, setShowHeader] = useState(window.innerWidth > 1000);

	const showHideMenu = () => {
		setShowBurger(!showBurger);
		setShowHeader(showBurger);
	};

	const closeHeader = () => {
		setShowHeader(window.innerWidth > 1000);
		setShowBurger(window.innerWidth <= 1000);
	};

	// Set page loader
	const [loading, setLoading] = useState(true);

	const showLoader = (time) => {
		setLoading(true);
		setTimeout(() => setLoading(false), time);
	};

	useEffect(() => {
		const showLoaderOnLoad = () => showLoader(1000);

		window.addEventListener('load', showLoaderOnLoad);

		return () => window.removeEventListener('load', showLoaderOnLoad);
	}, []);

	return (
		<LanguageContext.Provider
			value={{
				// Navigation between sections
				section,
				references,
				goTo,

				// Show or hide the menu and the header
				showBurger,
				showHeader,
				showHideMenu,
				closeHeader,

				// Set page loader
				loading,
				showLoader,
			}}>
			{children}
		</LanguageContext.Provider>
	);
}

export const useNavigation = () => useContext(LanguageContext);
