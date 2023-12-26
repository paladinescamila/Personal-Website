/*
    Type
    0 -> Languages
    1 -> Libraries & Frameworks
    2 -> Tools & Platforms

    Level
    0 -> Basic
    1 -> Intermediate
    2 -> Advanced
*/

import html from '../../Assets/Images/skills/html.png';
import css from '../../Assets/Images/skills/css.png';
import scss from '../../Assets/Images/skills/scss.png';
import js from '../../Assets/Images/skills/js.png';
import ts from '../../Assets/Images/skills/ts.png';
import react from '../../Assets/Images/skills/react.png';
import reactNative from '../../Assets/Images/skills/react-native.png';
import tailwind from '../../Assets/Images/skills/tailwind.png';
import git from '../../Assets/Images/skills/git.png';
import github from '../../Assets/Images/skills/github.png';
import firebase from '../../Assets/Images/skills/firebase.png';
import figma from '../../Assets/Images/skills/figma.png';
import scrum from '../../Assets/Images/skills/scrum.png';

const skills = [
	{name: 'HTML', img: html, type: 0, level: 1},
	{name: 'CSS', img: css, type: 0, level: 1},
	{name: 'SCSS', img: scss, type: 0, level: 0},
	{name: 'JavaScript', img: js, type: 0, level: 1},
	{name: 'TypeScript', img: ts, type: 0, level: 0},
	{name: 'React', img: react, type: 1, level: 0},
	{name: 'React Native', img: reactNative, type: 1, level: 0},
	{name: 'Tailwind CSS', img: tailwind, type: 1, level: 0},
	{name: 'Git', img: git, type: 2, level: 0},
	{name: 'GitHub', img: github, type: 2, level: 0},
	{name: 'Firebase', img: firebase, type: 2, level: 0},
	{name: 'Figma', img: figma, type: 2, level: 0},
	{name: 'Scrum', img: scrum, type: 2, level: 1},
];

export default skills;
