import React from 'react';
import Job from './Job';
import jobs from '../Services/Constants/jobs';
import dateFormat from '../Services/Utils/dateFormat';
import {useLanguage} from '../Context/Language';

export default function Experience({refProperty}) {
	const {content} = useLanguage();
	const {language} = content.experience;

	return (
		<section className='section-container experience-section' ref={refProperty}>
			<h2 className='section-title'>{content.experience.title}</h2>
			<div className='jobs-container'>
				{jobs.map((j) => (
					<Job
						key={j.companyName}
						companyName={j.companyName}
						companyLink={j.companyLink}
						date={`${dateFormat(j.date[0], language)} - ${dateFormat(
							j.date[1],
							language
						)}`}
						position={language === 'es' ? j.positionES : j.positionEN}
						tasks={language === 'es' ? j.tasksES : j.tasksEN}
					/>
				))}
				<div className='time-line'></div>
			</div>
		</section>
	);
}
