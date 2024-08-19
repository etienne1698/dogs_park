import React from "react";

export default function Button({ txt, variant = "base", className, onClick }) {
	let classBtn = "";

	if (variant == "base") {
		classBtn = "bg-primary text-white hover:bg-secondary hover:text-primary";
	} else if (variant == "tertiary") {
		classBtn = "bg-white text-primary border border-solid border-primary";
	} else if (variant == "welcome_primary") {
		classBtn =
			"bg-primary text-white border border-solid border-white hover:bg-white hover:text-primary";
	} else if (variant == "welcome_secondary") {
		classBtn = "bg-white text-primary hover:bg-secondary";
	}

	return (
		<button
			onClick={onClick}
			className={
				classBtn +
				"  px-12 py-4 text-button rounded-full font-poppins " +
				className
			}
		>
			{txt}
		</button>
	);
}
