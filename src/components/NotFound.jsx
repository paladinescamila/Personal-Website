import React from "react";
import {Link} from "react-router-dom";

export default function NotFound() {
	return (
		<div className='not-found'>
			<h2 className='section-title'>404</h2>
			<p>Page not found</p>
			<Link to='/' className='solid-button'>
				Go to home
			</Link>
		</div>
	);
}
