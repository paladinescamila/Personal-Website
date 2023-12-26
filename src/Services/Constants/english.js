import cvEnglish from "./CV-Camila-Paladines-(English).pdf";

const englishJSON = {
	header: {
		about: "About",
		skills: "Skills",
		experience: "Experience",
		projects: "Projects",
		contact: "Contact",
		language: "English",
	},
	home: {
		hi: "Hi, I'm",
		job: "Frontend Developer",
		button: "Contact me",
	},
	about: {
		title: "About",
		paragraph1: (
			<>
				My name is Camila Paladines, I'm a <p>Frontend Developer</p> at Piyion in Cali, Colombia. I love designing and developing applications that are very useful for people.
			</>
		),
		paragraph2:
			"My goal is to cooperate with the creation of tools that contribute to the development of a person, a company, or a nation. That's why I like to learn new technologies, and use them with the mission to improve the world a little bit, one step at a time.",
		cvTitle: "Download CV",
		cvFile: cvEnglish,
	},
	skills: {
		title: "Skills",
		languages: "Languages",
		libraries: "Libraries & Frameworks",
		tools: "Tools & Platforms",
	},
	experience: {
		title: "Experience",
		language: "en",
	},
	projects: {
		title: "Projects",
		language: "en",
		frontendMentor: "More on Frontend Mentor",
	},
	contact: {
		title: "Contact",
		paragraph:
			"I'm looking for new opportunities to contribute to the industry and grow as a developer. If you have a project you want me to participate in or if you have any questions let me know! I'll do my best to answer you.",
		button: "Say hello",
	},
};

export default englishJSON;
