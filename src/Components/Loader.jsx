import React from "react";
import Loading from "../Assets/Images/loading.svg";

export default function Loader() {
	return (
		<div className='loading-container'>
			<img src={Loading} alt='Loading web page'></img>
		</div>
	);
}
