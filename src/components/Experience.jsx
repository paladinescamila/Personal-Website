import React from "react";
import searchingJob from "../img/searching-job.svg";

export default function Experience({content, refProperty}) {
	return (
		<section className='section-container experience-section' ref={refProperty}>
			<h2 className='section-title'>{content.title}</h2>
			<img src={searchingJob} alt='Searching job' />
			<p>{content.message}</p>
		</section>
	);
}
