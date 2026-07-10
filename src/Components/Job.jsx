import React, {useState, useMemo} from 'react';

export default function Job({companyName, companyLink, date, position, tasks}) {
	const [isExpanded, setIsExpanded] = useState(false);

	const visibleTasks = useMemo(
		() => (isExpanded ? tasks : tasks.slice(0, 1)),
		[isExpanded, tasks],
	);

	const hasMoreTasks = useMemo(() => tasks.length > 1, [tasks]);

	return (
		<div className='job-item'>
			<p className='job-position'>{position}</p>
			<a className='job-company' href={companyLink} target='_blank' rel='noreferrer'>
				{companyName}
			</a>
			<p className='job-date'>{date}</p>

			<div className='job-circle'>
				<div />
			</div>
			<div className='job-tasks-wrapper'>
				<ul className='job-tasks'>
					{visibleTasks.map((t, index) => (
						<li key={`${index}-${t}`}>{t}</li>
					))}
				</ul>
				{hasMoreTasks && (
					<button
						type='button'
						className='job-toggle'
						onClick={() => setIsExpanded((value) => !value)}
						aria-expanded={isExpanded}>
						{isExpanded ? 'Ver menos' : 'Ver más'}
					</button>
				)}
			</div>
		</div>
	);
}
