import purpleCalendarPhoto from "../../Assets/Images/projects/purple-calendar.png";
import tomatoTimePhoto from "../../Assets/Images/projects/tomato-time.png";
import fitappPhoto from "../../Assets/Images/projects/fitapp.png";

const projects = [
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
	{
		name: "FitApp",
		descriptionEN: "This app can help you track your weight, BMI, muscle mass percentage and water percentage.",
		descriptionES: "Esta aplicación puede ayudarte a hacer un seguimiento de tu peso, IMC, porcentaje de masa muscular y porcentaje de agua.",
		tools: ["HTML", "CSS", "JavaScript", "Firebase"],
		website: "https://my-fit-app.netlify.app/",
		github: "https://github.com/paladinescamila/FitApp",
		img: fitappPhoto,
	},
];

export default projects;
