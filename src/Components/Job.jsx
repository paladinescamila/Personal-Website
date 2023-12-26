import React from "react";

export default function Job({companyName, companyLink, date, position, tasks}) {
	return (
		<div className='job-item'>
			<p className='job-position'>{position}</p>
			<a className='job-company' href={companyLink} target='_blank' rel='noreferrer'>
				{companyName}
			</a>
			<p className='job-date'>{date}</p>

			<div className='job-circle'>
				<div></div>
			</div>
			<ul className='job-tasks'>
				{tasks.map((t) => (
					<li key={t}>{t}</li>
				))}
			</ul>
		</div>
	);
}
