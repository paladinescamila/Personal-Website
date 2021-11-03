import React from "react";
import searchingJob from "../img/searching-job.svg";

export default function Experience() {
	return (
		<div className='section-container experience-section'>
			<h2 className='section-title'>Experience</h2>
			<img src={searchingJob} alt='Searching job' />
			<p>I am looking for my first job.</p>
		</div>
	);
}
