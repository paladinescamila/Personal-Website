import alleShopPhoto from "../../Assets/Images/projects/alle-shop.png";
import calculatorAppPhoto from "../../Assets/Images/projects/calculator-app.png";
import sunnysidePhoto from "../../Assets/Images/projects/sunnyside.png";
import cardDetailsFormPhoto from "../../Assets/Images/projects/card-details-form.png";
import spaceTourism from "../../Assets/Images/projects/space-tourism.png";
import adviceGeneratorApp from "../../Assets/Images/projects/advice-generator-app.png";
import purpleCalendarPhoto from "../../Assets/Images/projects/purple-calendar.png";
import tomatoTimePhoto from "../../Assets/Images/projects/tomato-time.png";

const projects = [
	{
		name: "Alle Shop",
		descriptionEN: "This is a simple e-commerce website, where you can add products to the cart and make a purchase.",
		descriptionES: "Este es un sitio web de comercio electrónico simple, donde puedes agregar productos al carrito y realizar una compra.",
		tools: ["React", "TypeScript", "TailwindCSS", "Firebase"],
		website: "https://alle-shop.netlify.app/",
		github: "https://github.com/paladinescamila/Alle-Shop",
		img: alleShopPhoto,
	},
	{
		name: 'Calculator App',
		descriptionEN: "This is a simple calculator application, where you can perform basic operations.",
		descriptionES: "Esta es una aplicación de calculadora simple, donde puedes realizar operaciones básicas.",
		tools: ["React", "TypeScript", "SCSS"],
		website: "https://ca-frontend-mentor.netlify.app/",
		github: "https://github.com/paladinescamila/Calculator-App",
		img: calculatorAppPhoto,
	},
	{
		name: 'Sunnyside',
		descriptionEN: "This is a website for a fictitious agency, where you can see the services they offer and their portfolio.",
		descriptionES: "Este es un sitio web para una agencia ficticia, donde puedes ver los servicios que ofrecen y su portafolio.",
		tools: ["React", "TypeScript", "SCSS"],
		website: 'https://salp-frontend-mentor.netlify.app/',
		github: 'https://github.com/paladinescamila/Sunnyside-Agency-Landing-Page',
		img: sunnysidePhoto,
	},
	{
		name: 'Card Details Form',
		descriptionEN: "This is a simple card details form, where you can enter your card information.",
		descriptionES: "Este es un simple formulario de detalles de tarjeta, donde puedes ingresar la información de tu tarjeta.",
		tools: ["React", "TypeScript", "SCSS"],
		website: 'https://icdf-frontend-mentor.netlify.app',
		github: 'https://github.com/paladinescamila/Interactive-Card-Details-Form',
		img: cardDetailsFormPhoto,
	},
	{
		name: 'Space Tourism',
		descriptionEN: "This is a simple website, where you can see different planets and their characteristics.",
		descriptionES: "Este es un sitio web simple, donde puedes ver diferentes planetas y sus características.",
		tools: ["React", "TypeScript", "SCSS"],
		website: 'https://stmw-frontend-mentor.netlify.app',
		github: 'https://github.com/paladinescamila/Space-Tourism',
		img: spaceTourism,
	},
	{
		name: 'Advice Generator App',
		descriptionEN: "This is a simple application that shows you random advice.",
		descriptionES: "Esta es una aplicación simple que te muestra consejos aleatorios.",
		tools: ["React", "TypeScript", "CSS"],
		website: 'https://aga-frontend-mentor.netlify.app',
		github: 'https://github.com/paladinescamila/Advice-Generator-App',
		img: adviceGeneratorApp,
	},
	{
		name: "Purple Calendar",
		descriptionEN: "This is a simple monthly calendar that allows you to navigate between months. Here you can also go to a specific month and year.",
		descriptionES: "Este es un simple calendario mensual que te permite navegar entre los meses. Aquí también puedes ir a un mes y año específico.",
		tools: ["HTML", "CSS", "JavaScript"],
		website: "https://purple-calendar.netlify.app/",
		github: "https://github.com/paladinescamila/Purple-Calendar",
		img: purpleCalendarPhoto,
	},
	{
		name: "Tomato Time",
		descriptionEN: "With this application you can track your concentration time, using the Pomodoro technique, which can be customized to your needs.",
		descriptionES: "Con esta aplicación puedes hacer un seguimiento de tu tiempo de concentración, utilizando la técnica Pomodoro, que se puede personalizar según tus necesidades.",
		tools: ["HTML", "CSS", "JavaScript"],
		website: "https://tomato-time.netlify.app/",
		github: "https://github.com/paladinescamila/Tomato-Time",
		img: tomatoTimePhoto,
	},
];

export default projects;
