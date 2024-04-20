import React from 'react';
import Button from './Button';
import {social} from '../Constants/social';
import {useLanguage} from '../Context/Language';
import {useNavigation} from '../Context/Navigation';

export default function Contact({refProperty}) {
	const {content} = useLanguage();
	const {references} = useNavigation();

	return (
		<section className='section-container contact-section' ref={references.contact}>
			<h2 className='section-title'>{content.contact.title}</h2>
			<p className='contact-text'>{content.contact.paragraph}</p>
			<p className='mail'>camilapaladines27@gmail.com</p>
			<Button
				value={content.contact.button}
				type='solid'
				link='mailto:camilapaladines27@gmail.com'
			/>
			<div className='all-social-links'>
				{social.map((s) => (
					<a href={s.link} target='_blank' rel='noreferrer' key={s.name}>
						<img alt={s.name} src={s.img} />
					</a>
				))}
			</div>
		</section>
	);
}
