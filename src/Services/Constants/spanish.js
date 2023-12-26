import cvSpanish from './CV-Camila-Paladines-(Spanish).pdf';

const spanishJSON = {
	header: {
		about: 'Sobre mí',
		skills: 'Habilidades',
		experience: 'Experiencia',
		projects: 'Proyectos',
		contact: 'Contacto',
		language: 'Español',
	},
	home: {
		hi: 'Hola, soy',
		job: 'Desarrolladora Frontend',
		button: 'Contáctame',
	},
	about: {
		title: 'Sobre mí',
		paragraph1: (
			<>
				Mi nombre es Camila Paladines, soy Desarrolladora Frontend en Piyion en Cali,
				Colombia. Me encanta diseñar y desarrollar aplicaciones que sean muy útiles para las
				personas.
			</>
		),
		paragraph2:
			'Mi objetivo es colaborar con la creación de herramientas que contribuyan al desarrollo de una persona, una empresa o una nación. Por eso me gusta aprender nuevas tecnologías, y utilizarlas con la misión de mejorar el mundo un poco, un paso a la vez.',
		cvTitle: 'Descargar CV',
		cvFile: cvSpanish,
	},
	skills: {
		title: 'Habilidades',
		languages: 'Lenguajes',
		libraries: 'Librerías & Frameworks',
		tools: 'Herramientas & Plataformas',
	},
	experience: {
		title: 'Experiencia',
		language: 'es',
	},
	projects: {
		title: 'Proyectos',
		language: 'es',
		frontendMentor: 'Ver más en Frontend Mentor',
	},
	contact: {
		title: 'Contacto',
		paragraph:
			'Estoy buscando nuevas oportunidades para contribuir a la industria y crecer como desarrolladora. Si tienes un proyecto en el que quieres que participe o si tienes alguna pregunta, házmelo saber. Haré todo lo posible por responderte.',
		button: 'Escríbeme',
	},
};

export default spanishJSON;
