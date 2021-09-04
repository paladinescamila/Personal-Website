import React from "react";

export default function Button({value, type}) {
	let style = `button ${type}-button`;
	return <button className={style}>{value}</button>;
}
