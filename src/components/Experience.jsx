import React from "react";
import searchingJob from "../img/searching-job.svg";

export default function Experience({content}) {
	return (
		<div className='section-container experience-section'>
			<h2 className='section-title'>{content.title}</h2>
			<img src={searchingJob} alt='Searching job' />
			<p>{content.message}</p>
		</div>
	);
}
