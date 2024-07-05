import React from 'react';
import Job from './Job';
import {JOBS} from '../Constants/jobs';
import {dateRangeFormat} from '../Utils/date';
import {useLanguage} from '../Context/Language';
import {useNavigation} from '../Context/Navigation';

export default function Experience() {
	const {content} = useLanguage();
	const {references} = useNavigation();
	const {language} = content.experience;

	return (
		<section className='section-container experience-section' ref={references.experience}>
			<h2 className='section-title'>{content.experience.title}</h2>
			<div className='jobs-container'>
				{JOBS.map((j) => (
					<Job
						key={j.companyName}
						companyName={j.companyName}
						companyLink={j.companyLink}
						date={dateRangeFormat(j.date.start, j.date.end, language)}
						position={language === 'es' ? j.positionES : j.positionEN}
						tasks={language === 'es' ? j.tasksES : j.tasksEN}
					/>
				))}
				<div className='time-line' />
			</div>
		</section>
	);
}
