import React from "react";
import searchingJob from "../img/searching-job.svg";

export default function Experience({language}) {
	return (
		<div className='section-container experience-section'>
			<h2 className='section-title'>{language.title}</h2>
			<img src={searchingJob} alt='Searching job' />
			<p>{language.message}</p>
		</div>
	);
}
