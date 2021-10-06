import React from "react";

export default function Button({value, type, link}) {
	let style = `button ${type}-button`;
	return (
		<a href={link} alt={value} className={style} target='_blank' rel='noreferrer'>
			{value}
		</a>
	);
}
