import React from "react";
import Button from "./Button";
import profileImage from "../img/profile.png";
import cvEnglish from "../data/CV-English.pdf";

export default function Banner() {
	return (
		<div className='banner-section'>
			<div>
				<div>
					<p>Hi, I’m</p>
					<p>Camila Paladines</p>
					<p>Frontend Web Developer</p>
				</div>
				<div>
					<Button value='Say hello' type='solid' link='mailto:camilapaladines27@gmail.com' />
					<Button value='Download CV' type='ghost' link={cvEnglish} />
				</div>
			</div>
			<img alt='Camila Paladines' src={profileImage}></img>
		</div>
	);
}
