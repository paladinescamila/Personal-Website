import React from 'react';
import Button from './Button';
import Photo from '../Assets/Images/profile.jpg';
import {useLanguage} from '../Context/Language';
import {useNavigation} from '../Context/Navigation';

export default function About() {
	const {content} = useLanguage();
	const {references} = useNavigation();

	return (
		<section className='section-container' ref={references.about}>
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
					<img src={Photo} alt='Camila Paladines photography' />
				</div>
			</div>
		</section>
	);
}
