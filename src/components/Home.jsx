import React from "react";
import Button from "./Button";
import launch from "../img/launch.svg";

export default function Home({content}) {
	return (
		<div className='home-section home-padding'>
			<div className='home-left'>
				<div className='home-hi'>
					<p>{content.hi}</p>
					<p>Camila Paladines</p>
					<p>{content.job}</p>
				</div>
				<div>
					<Button value={content.button} type='solid' link='mailto:camilapaladines27@gmail.com' />
				</div>
			</div>
			<img src={launch} alt='Frontend'></img>
		</div>
	);
}
