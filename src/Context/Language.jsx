import React, {createContext, useContext, useState} from 'react';
import englishJSON from '../Constants/english';
import spanishJSON from '../Constants/spanish';

const LanguageContext = createContext({});

export function LanguageProvider({children}) {
	const LANGUAGE = navigator.language.slice(0, 2);

	const [content, setContent] = useState(LANGUAGE === 'es' ? spanishJSON : englishJSON);

	const switchToSpanish = () => setContent(spanishJSON);
	const switchToEnglish = () => setContent(englishJSON);

	return (
		<LanguageContext.Provider value={{content, switchToSpanish, switchToEnglish}}>
			{children}
		</LanguageContext.Provider>
	);
}

export const useLanguage = () => useContext(LanguageContext);
