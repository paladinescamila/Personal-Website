import usaFlag from "../img/usa.png";
import cvEnglish from "./CV-English.pdf";

const englishJSON = {
	header: {
		about: "About",
		skills: "Skills",
		experience: "Experience",
		projects: "Projects",
		contact: "Contact",
		flag: usaFlag,
		language: "EN",
	},
	home: {
		hi: "Hi, I'm",
		job: "Frontend Developer",
		button: "Contact me",
	},
	about: {
		title: "About",
		contentP1:
			"My name is Camila Paladines, I'm a Computer Science student at Pontificia Universidad Javeriana in Cali, Colombia. I'm a Frontend Development enthusiast and I'm passionate about designing and developing web applications that are very useful for people.",
		contentP2:
			"My goal is to cooperate with the creation of tools that contribute to the development of a person, a company, or a nation. That's why I like to learn new technologies, and use them with the mission to improve the world a little bit, one step at a time.",
		cvTitle: "Download CV",
		cvFile: cvEnglish,
	},
	skills: {
		title: "Skills",
		languagesCard: "Languages",
		librariesCard: "Libraries & Frameworks",
		toolsCard: "Tools & Platforms",
	},
	experience: {
		title: "Experience",
		message: "I'm looking for my first job.",
	},
	projects: {
		title: "Projects",
		frontendMentor: "More on Frontend Mentor",
	},
	contact: {
		title: "Contact",
		content:
			"I'm looking for new opportunities to contribute to the industry and grow as a developer. If you have a project you want me to participate in or if you have any questions let me know! I'll do my best to answer you.",
		button: "Say hello",
	},
};

export default englishJSON;
