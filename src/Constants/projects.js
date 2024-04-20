import AlleShopPhoto from '../Assets/Images/projects/alle-shop.png';
import CalculatorAppPhoto from '../Assets/Images/projects/calculator-app.png';
import SunnysideAgencyPhoto from '../Assets/Images/projects/sunnyside-agency.png';
import CardDetailsPhoto from '../Assets/Images/projects/card-details.png';
import SpaceTourismPhoto from '../Assets/Images/projects/space-tourism.png';
import AdviceGeneratorAppPhoto from '../Assets/Images/projects/advice-generator-app.png';
import PurpleCalendarPhoto from '../Assets/Images/projects/purple-calendar.png';
import TomatoTimePhoto from '../Assets/Images/projects/tomato-time.png';

const projects = [
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
		name: 'Sunnyside Agency',
		descriptionEN:
			'This is a website for a fictitious agency, where you can see the services they offer and their portfolio.',
		descriptionES:
			'Este es un sitio web para una agencia ficticia, donde puedes ver los servicios que ofrecen y su portafolio.',
		tools: ['React', 'TypeScript', 'SCSS'],
		website: 'https://salp-frontend-mentor.netlify.app',
		github: 'https://github.com/paladinescamila/Sunnyside-Agency-Landing-Page',
		img: SunnysideAgencyPhoto,
	},
	{
		name: 'Card Details',
		descriptionEN:
			'This is a card details form, where you can enter your card information (no saved, just validated).',
		descriptionES:
			'Este es un formulario de detalles de tarjeta, donde puedes ingresar tu información de tarjeta (no se guarda, solo se valida).',
		tools: ['React', 'TypeScript', 'SCSS'],
		website: 'https://icdf-frontend-mentor.netlify.app',
		github: 'https://github.com/paladinescamila/Interactive-Card-Details-Form',
		img: CardDetailsPhoto,
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
		name: 'Advice Generator App',
		descriptionEN: 'This application shows you random advices.',
		descriptionES: 'Esta aplicación te muestra consejos aleatorios.',
		tools: ['React', 'TypeScript', 'CSS'],
		website: 'https://aga-frontend-mentor.netlify.app',
		github: 'https://github.com/paladinescamila/Advice-Generator-App',
		img: AdviceGeneratorAppPhoto,
	},
	{
		name: 'Purple Calendar',
		descriptionEN:
			'This is a simple monthly calendar that allows you to navigate between months. Here you can also go to a specific month and year.',
		descriptionES:
			'Este es un simple calendario mensual que te permite navegar entre los meses. Aquí también puedes ir a un mes y año específico.',
		tools: ['HTML', 'CSS', 'JavaScript'],
		website: 'https://purple-calendar.netlify.app',
		github: 'https://github.com/paladinescamila/Purple-Calendar',
		img: PurpleCalendarPhoto,
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

export default projects;
