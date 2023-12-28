import React from 'react';
import {useNavigation} from '../Context/Navigation';

export default function BurgerButton() {
	const {showBurger, showHideMenu} = useNavigation();

	return (
		<svg className={`burger-button ${showBurger ? '' : 'menu-open'}`} onClick={showHideMenu}>
			<line x1='0' y1='50%' x2='100%' y2='50%' className='top' shapeRendering='crispEdges' />
			<line
				x1='0'
				y1='50%'
				x2='100%'
				y2='50%'
				className='middle'
				shapeRendering='crispEdges'
			/>
			<line
				x1='0'
				y1='50%'
				x2='100%'
				y2='50%'
				className='bottom'
				shapeRendering='crispEdges'
			/>
		</svg>
	);
}
