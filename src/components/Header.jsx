import React from "react";
import "../css/Header.css";
import favicon from "../img/logo.png";

export default function Header({language}) {
	return (
		<div className='header'>
			<img className='header-logo' src={favicon} alt='Logo'></img>
			<ul>
				<li>ABOUT</li>
				<li>EXPERIENCE</li>
				<li>PROJECTS</li>
				<li>CONTACT</li>
				<li>
					<p>{language}</p>
					<div className='select-languaje'>
						<button>ENGLISH</button>
						<button>SPANISH</button>
					</div>
				</li>
			</ul>
		</div>
	);
}
