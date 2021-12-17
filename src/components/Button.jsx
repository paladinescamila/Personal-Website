import React from "react";

export default function Button({value, type, link}) {
	return (
		<a href={link} className={`${type}-button`} target='_blank' rel='noreferrer'>
			{value}
		</a>
	);
}
