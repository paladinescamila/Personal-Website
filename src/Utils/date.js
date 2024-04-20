import {jobs} from '../Constants/jobs';

const monthNamesEN = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const monthNamesES = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre',
];

const dateFormat = (date, language) => {
	let month = date.getMonth(),
		year = date.getFullYear(),
		today = new Date(),
		dateString;

	dateString = `${language === 'es' ? monthNamesES[month] : monthNamesEN[month]} ${year}`;

	if (month === today.getMonth() && year === today.getFullYear())
		dateString = language === 'es' ? 'Presente' : 'Present';

	return dateString;
};

const dateRangeFormat = (start, end, language) => {
	const startFormat = dateFormat(start, language);
	const endFormat = dateFormat(end, language);
	return `${startFormat} - ${endFormat}`;
};

const getYearsOfExperience = () => {
	const now = new Date();
	const firstJob = jobs.reduce((acc, job) => (job.date.start < acc ? job.date.start : acc), now);

	const years = now.getFullYear() - firstJob.getFullYear();
	const months = now.getMonth() - firstJob.getMonth();

	if (years === 0) return '1';
	if (months === 0) return years.toString();
	else return `${years}+`;
};

export {dateFormat, dateRangeFormat, getYearsOfExperience};
