import React from "react";
import favicon from "../img/logo.png";

export default function Header({language}) {
	return (
		<div className='header'>
			<img src={favicon} alt='Logo'></img>
			<ul className='header-sections'>
				<li>ABOUT</li>
				<li>EXPERIENCE</li>
				<li>PROJECTS</li>
				<li>CONTACT</li>
				<li className='select-languaje'>
					<p>{language}</p>
					<div className='select-languaje-container'>
						<button>ENGLISH</button>
						<button>SPANISH</button>
					</div>
				</li>
			</ul>
		</div>
	);
}
