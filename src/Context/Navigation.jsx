import React, {createContext, useContext, useEffect, useState, useRef} from 'react';

const LanguageContext = createContext({});

export function NavigationProvider({children}) {
	// Navigation between sections
	const [section, setSection] = useState('home');

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

	useEffect(() => {
		window.addEventListener('resize', closeHeader);
		return () => window.removeEventListener('resize', closeHeader);
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
			}}>
			{children}
		</LanguageContext.Provider>
	);
}

export const useNavigation = () => useContext(LanguageContext);
