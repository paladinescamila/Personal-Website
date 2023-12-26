import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LanguageProvider} from './Context/Language';
import {NavigationProvider} from './Context/Navigation';

ReactDOM.render(
	<React.StrictMode>
		<NavigationProvider>
			<LanguageProvider>
				<App />
			</LanguageProvider>
		</NavigationProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
