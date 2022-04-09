import React from "react";
import Job from "./Job";
import jobs from "../data/jobs";

export default function Experience({content, refProperty}) {
	const monthNamesEN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const monthNamesES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

	const format = (date) => {
		let month = date.getMonth(),
			year = date.getFullYear(),
			today = new Date(),
			dateString;

		dateString = `${content.language === "es" ? monthNamesES[month] : monthNamesEN[month]} ${year}`;
		if (month === today.getMonth() && year === today.getFullYear()) dateString = content.language === "es" ? "Presente" : "Present";
		return dateString;
	};

	return (
		<section className='section-container experience-section' ref={refProperty}>
			<h2 className='section-title'>{content.title}</h2>
			<div className='jobs-container'>
				{jobs.map((j) => (
					<Job
						companyName={j.companyName}
						companyLink={j.companyLink}
						date={`${format(j.date[0])} - ${format(j.date[1])}`}
						position={content.language === "es" ? j.positionES : j.positionEN}
						tasks={content.language === "es" ? j.tasksES : j.tasksEN}
					/>
				))}
				<div className='time-line'></div>
			</div>
		</section>
	);
}
