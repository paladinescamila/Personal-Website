import React from 'react';
import Button from './Button';
import launch from '../Assets/Images/launch.svg';
import scroll from '../Assets/Images/scroll-down.svg';
import {useLanguage} from '../Context/Language';

export default function Home({refProperty}) {
	const {content} = useLanguage();

	return (
		<>
			<section className='home-section' ref={refProperty}>
				<div className='home-left'>
					<div className='home-hi'>
						<p>{content.home.hi}</p>
						<h1>Camila Paladines</h1>
						<p>{content.home.job}</p>
					</div>
					<div>
						<Button
							value={content.home.button}
							type='solid'
							link='mailto:camilapaladines27@gmail.com'
						/>
					</div>
				</div>
				<img src={launch} alt='Spaceship'></img>
			</section>
			<div className='scroll-down'>
				<img src={scroll} alt='Scroll down'></img>
			</div>
		</>
	);
}
