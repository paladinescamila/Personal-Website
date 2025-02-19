import AlleShopPhoto from '../Assets/Images/projects/alle-shop.png';
import MultiStepForm from '../Assets/Images/projects/multi-step-form.jpeg';
import CountriesGallery from '../Assets/Images/projects/countries-gallery.jpeg';
import CalculatorAppPhoto from '../Assets/Images/projects/calculator-app.png';
import SpaceTourismPhoto from '../Assets/Images/projects/space-tourism.png';
import IpAddressTrackerPhoto from '../Assets/Images/projects/ip-address-tracker.png';
import TomatoTimePhoto from '../Assets/Images/projects/tomato-time.png';

export const PROJECTS = [
	{
		name: 'Alle Shop',
		descriptionEN:
			'This is a fake e-commerce website, where you can add products to the cart and make a purchase.',
		descriptionES:
			'Este es un sitio web de comercio electrónico falso, donde puedes agregar productos al carrito y realizar una compra.',
		tools: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
		website: 'https://alle-shop.netlify.app',
		github: 'https://github.com/paladinescamila/Alle-Shop',
		img: AlleShopPhoto,
	},
	{
		name: 'Multi-step form',
		descriptionEN:
			'This is a multi-step form that simulates the purchase of a plan for a service.',
		descriptionES:
			'Este es un formulario de varios pasos que simula la compra de un plan para un servicio.',
		tools: ['React', 'TypeScript', 'Redux', 'SCSS'],
		website: 'https://msf-frontend-mentor.netlify.app',
		github: 'https://github.com/paladinescamila/Multi-Step-Form',
		img: MultiStepForm,
	},
	{
		name: 'Countries Gallery',
		descriptionEN:
			'This is a gallery of countries containing key data for each one, such as population, region, capital city, etc.',
		descriptionES:
			'Esta es una galería de países que contiene datos clave de cada uno de ellos, como población, región, capital, etc.',
		tools: ['React', 'TypeScript', 'SCSS'],
		website: 'https://rca-frontend-mentor.netlify.app',
		github: 'https://github.com/paladinescamila/Countries-Gallery',
		img: CountriesGallery,
	},
	{
		name: 'Calculator App',
		descriptionEN:
			'This is a calculator application, where you can perform basic operations. Also, you can change between three different themes.',
		descriptionES:
			'Esta es una aplicación de calculadora, donde puedes realizar operaciones básicas. Además, puedes cambiar entre tres aspectos diferentes.',
		tools: ['React', 'TypeScript', 'SCSS'],
		website: 'https://ca-frontend-mentor.netlify.app',
		github: 'https://github.com/paladinescamila/Calculator-App',
		img: CalculatorAppPhoto,
	},
	{
		name: 'Space Tourism',
		descriptionEN:
			'This is a website where you can see different planets to visit and their characteristics.',
		descriptionES:
			'Este es un sitio web donde puedes ver diferentes planetas para visitar y sus características.',
		tools: ['React', 'TypeScript', 'SCSS'],
		website: 'https://stmw-frontend-mentor.netlify.app',
		github: 'https://github.com/paladinescamila/Space-Tourism',
		img: SpaceTourismPhoto,
	},
	{
		name: 'IP Address Tracker',
		descriptionEN:
			'This is a website that allows you to track IP addresses, providing information such as location, time zone and internet service provider.',
		descriptionES:
			'Este es un sitio web que permite rastrear direcciones IP, proporcionando información como la ubicación, zona horaria y proveedor de servicios de internet.',
		tools: ['React', 'TypeScript', 'TailwindCSS'],
		website: 'https://ipat-frontend-mentor.netlify.app',
		github: 'https://github.com/paladinescamila/IP-Address-Tracker',
		img: IpAddressTrackerPhoto,
	},
	{
		name: 'Tomato Time',
		descriptionEN:
			'With this application you can track your concentration time, using the Pomodoro technique, which can be customized to your needs.',
		descriptionES:
			'Con esta aplicación puedes hacer un seguimiento de tu tiempo de concentración, utilizando la técnica Pomodoro, que se puede personalizar según tus necesidades.',
		tools: ['HTML', 'CSS', 'JavaScript'],
		website: 'https://tomato-time.netlify.app',
		github: 'https://github.com/paladinescamila/Tomato-Time',
		img: TomatoTimePhoto,
	},
];
