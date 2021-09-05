import React from "react";
import "../css/Contact.css";
import Button from "./Button";

export default function Contact() {
	return (
		<div className='contact-section'>
			<p className='section-title'>Contact</p>
			<p className='section-text contact-text'>
				I am looking for new opportunities to contribute to the industry and grow as a developer. If you have a project you want me to participate in or if you have any questions let me know!
				I'll do my best to answer you.
			</p>
			<Button value='Say hello' type='solid' />
			<p>Follow me</p>
			<div></div>
		</div>
	);
}
