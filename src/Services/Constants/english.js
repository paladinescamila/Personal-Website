import cvEnglish from './CV-Camila-Paladines-(English).pdf';

const englishJSON = {
	header: {
		about: 'About',
		skills: 'Skills',
		experience: 'Experience',
		projects: 'Projects',
		contact: 'Contact',
		language: 'English',
	},
	home: {
		hi: "Hi, I'm",
		job: 'Frontend Developer',
		button: 'Contact me',
	},
	about: {
		title: 'About',
		paragraph1: (
			<>
				Hi! I'm Camila, a Frontend Developer at{' '}
				<a href='https://piyion.com' className='link' target='_blank' rel='noreferrer'>
					Piyion
				</a>
				, with a solid background in Computer Science and Engineering. With{' '}
				<p className='hightlight'>1+ years of experience</p> in the field, I have excelled
				in developing innovative and functional projects.
			</>
		),
		paragraph2: (
			<>
				My approach is based on the constant search for challenges that drive my{' '}
				<p className='hightlight'>professional growth</p> and the delivery of solutions that
				combine efficiency and elegance. I am committed to{' '}
				<p className='hightlight'>continuous improvement</p>, effective collaboration and
				creating digital experiences that are useful to people. I am excited to continue to
				expand my skills and contribute to the world of web development.
			</>
		),
		cvTitle: 'Download CV',
		cvFile: cvEnglish,
	},
	skills: {
		title: 'Skills',
		languages: 'Languages',
		libraries: 'Libraries & Frameworks',
		tools: 'Tools & Platforms',
	},
	experience: {
		title: 'Experience',
		language: 'en',
	},
	projects: {
		title: 'Projects',
		language: 'en',
		frontendMentor: 'More on Frontend Mentor',
	},
	contact: {
		title: 'Contact',
		paragraph:
			"I'm looking for new opportunities to contribute to the industry and grow as a developer. If you have a project you want me to participate in or if you have any questions let me know! I'll do my best to answer you.",
		button: 'Say hello',
	},
};

export default englishJSON;
