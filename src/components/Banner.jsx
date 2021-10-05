import React from "react";
import "../css/Banner.css";
import Button from "./Button";
import profileImage from "../img/profile.png";

export default function Banner() {
	return (
		<div className='banner-section'>
			<div className='banner-section-left'>
				<div className='banner-section-hi'>
					<p>Hi, I’m</p>
					<p>Camila Paladines</p>
					<p>Frontend Web Developer</p>
				</div>
				<div className='banner-section-buttons'>
					<Button value='Say hello' type='solid' link='mailto:camilapaladines27@gmail.com' />
					<Button value='Download CV' type='ghost' link='../data/CV-English.pdf' />
				</div>
			</div>
			<img alt='Camila Paladines' src={profileImage}></img>
		</div>
	);
}
