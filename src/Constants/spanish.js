import CV_ES from '../Assets/Documents/Camila-Paladines-CV-ES.pdf';
import {getYearsOfExperience} from '../Utils/date';

export const contentES = {
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
				Hola, soy Camila, Desarrolladora Frontend en{' '}
				<a href='https://piyion.com' className='link' target='_blank' rel='noreferrer'>
					Piyion
				</a>
				. Con <p className='hightlight'>{getYearsOfExperience()} años de experiencia</p> en
				el área, me he destacado en el desarrollo de proyectos innovadores y funcionales.
			</>
		),
		paragraph2: (
			<>
				Mi enfoque se basa en la búsqueda constante de desafíos que impulsen mi{' '}
				<p className='hightlight'>crecimiento profesional</p> y la entrega de soluciones que
				combinen eficiencia y elegancia. Estoy comprometida con la{' '}
				<p className='hightlight'>mejora continua</p>, la colaboración eficaz y la creación
				de experiencias digitales que sean útiles para las personas. Me entusiasma seguir
				ampliando mis conocimientos y contribuir al mundo del desarrollo web.
			</>
		),
		cvTitle: 'Descargar CV',
		cvFile: CV_ES,
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
