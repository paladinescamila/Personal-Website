import React from "react";
import Button from "./Button";
import launch from "../img/launch.svg";

export default function Home() {
	return (
		<div className='home-section'>
			<div className='home-left'>
				<div className='home-hi'>
					<p>Hi, I’m</p>
					<p>Camila Paladines</p>
					<p>Frontend Developer</p>
				</div>
				<div>
					<Button value='Contact me' type='solid' link='mailto:camilapaladines27@gmail.com' />
				</div>
			</div>
			<img src={launch} alt='Frontend Web Development'></img>
		</div>
	);
}
