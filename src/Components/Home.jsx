import React from 'react';
import Button from './Button';
import Launch from '../Assets/Images/launch.svg';
import Scroll from '../Assets/Images/scroll-down.svg';
import {useLanguage} from '../Context/Language';
import {useNavigation} from '../Context/Navigation';

export default function Home() {
	const {content} = useLanguage();
	const {references} = useNavigation();

	return (
		<>
			<section className='home-section' ref={references.home}>
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
				<img src={Launch} alt='Spaceship' />
			</section>
			<div className='scroll-down'>
				<img src={Scroll} alt='Scroll down' />
			</div>
		</>
	);
}
