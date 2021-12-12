import React from "react";

export default function Button({value, type, link}) {
	let style = `${type}-button`;
	return (
		<a href={link} className={style} target='_blank' rel='noreferrer'>
			{value}
		</a>
	);
}
