import React from "react";

export default function Sections({language}) {
	return (
		<ul>
			<li>About</li>
			<li>Experience</li>
			<li>Projects</li>
			<li>Contact</li>
			<li>
				<select>
					<option selected={language === "EN" ? "selected" : ""}>EN</option>
					<option selected={language === "ES" ? "selected" : ""}>ES</option>
				</select>
			</li>
		</ul>
	);
}
