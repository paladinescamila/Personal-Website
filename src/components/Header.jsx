import React from "react";
import "../css/Header.css";

export default function Header({language}) {
	return (
		<ul className='header'>
			<li>About</li>
			<li>Experience</li>
			<li>Projects</li>
			<li>Contact</li>
			<li>
				<select className='header-languages'>
					<option selected={language === "EN" ? "selected" : ""}>EN</option>
					<option selected={language === "ES" ? "selected" : ""}>ES</option>
				</select>
			</li>
		</ul>
	);
}
