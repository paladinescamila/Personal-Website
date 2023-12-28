import React from 'react';
import Job from './Job';
import jobs from '../Services/Constants/jobs';
import dateFormat from '../Services/Utils/dateFormat';
import {useLanguage} from '../Context/Language';
import {useNavigation} from '../Context/Navigation';

export default function Experience({refProperty}) {
	const {content} = useLanguage();
	const {references} = useNavigation();

	const {language} = content.experience;

	const dateRangeFormat = (start, end) => {
		const startFormat = dateFormat(start, language);
		const endFormat = dateFormat(end, language);

		return `${startFormat} - ${endFormat}`;
	};

	return (
		<section className='section-container experience-section' ref={references.experience}>
			<h2 className='section-title'>{content.experience.title}</h2>
			<div className='jobs-container'>
				{jobs.map((j) => (
					<Job
						key={j.companyName}
						companyName={j.companyName}
						companyLink={j.companyLink}
						date={dateRangeFormat(j.date[0], j.date[1])}
						position={language === 'es' ? j.positionES : j.positionEN}
						tasks={language === 'es' ? j.tasksES : j.tasksEN}
					/>
				))}
				<div className='time-line' />
			</div>
		</section>
	);
}
