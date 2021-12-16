import React from "react";
import Button from "./Button";
import launch from "../img/launch.svg";

export default function Home({language}) {
	return (
		<div className='home-section'>
			<div className='home-left'>
				<div className='home-hi'>
					<p>{language.hi}</p>
					<p>Camila Paladines</p>
					<p>{language.job}</p>
				</div>
				<div>
					<Button value={language.button} type='solid' link='mailto:camilapaladines27@gmail.com' />
				</div>
			</div>
			<img src={launch} alt='Frontend'></img>
		</div>
	);
}
