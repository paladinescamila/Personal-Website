import React, {createContext, useContext, useState} from 'react';
import {contentEN} from '../Constants/english';
import {contentES} from '../Constants/spanish';

const languages = {en: contentEN, es: contentES};
const defaultLanguage = languages.en;

const LanguageContext = createContext({});

export function LanguageProvider({children}) {
	const NAVIGATOR_LANGUAGE = navigator.language.slice(0, 2);

	const [content, setContent] = useState(languages[NAVIGATOR_LANGUAGE] || defaultLanguage);
	const switchToLanguage = (language) => setContent(languages[language]);

	return (
		<LanguageContext.Provider value={{content, switchToLanguage}}>
			{children}
		</LanguageContext.Provider>
	);
}

export const useLanguage = () => useContext(LanguageContext);
