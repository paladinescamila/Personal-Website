import React from 'react';
import Button from './Button';
import photo from '../Assets/Images/profile.png';
import {useLanguage} from '../Context/Language';

export default function About({refProperty}) {
	const {content} = useLanguage();

	return (
		<section className='section-container' ref={refProperty}>
			<h2 className='section-title'>{content.about.title}</h2>
			<div className='about-content'>
				<div>
					<p className='about-text'>{content.about.paragraph1}</p>
					<p className='about-text'>{content.about.paragraph2}</p>
					<Button
						value={content.about.cvTitle}
						type='solid'
						link={content.about.cvFile}
					/>
				</div>
				<div className='about-photo'>
					<img src={photo} alt='Camila Paladines photography' />
				</div>
			</div>
		</section>
	);
}
