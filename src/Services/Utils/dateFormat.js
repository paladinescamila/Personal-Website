const dateFormat = (date, language) => {
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

	let month = date.getMonth(),
		year = date.getFullYear(),
		today = new Date(),
		dateString;

	dateString = `${language === 'es' ? monthNamesES[month] : monthNamesEN[month]} ${year}`;
	if (month === today.getMonth() && year === today.getFullYear())
		dateString = language === 'es' ? 'Presente' : 'Present';
	return dateString;
};

export default dateFormat;
