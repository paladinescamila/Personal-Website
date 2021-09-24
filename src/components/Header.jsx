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
				<select className='header-languages'>
					<option selected={language === "EN" ? "selected" : ""}>EN</option>
					<option selected={language === "ES" ? "selected" : ""}>ES</option>
				</select>
			</ul>
		</div>
	);
}
