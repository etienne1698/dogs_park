import React from "react";

export default function Background({ title }) {
	return (
		<div
			className="bg-primary w-full flex justify-center items-center h-[30vh]"
			style={{
				clipPath: "ellipse(80% 100% at 50% 0%)",
			}}
		>
			<h1 className="font-poppins text-secondary text-center p-4 text-h2">
				{title}
			</h1>
		</div>
	);
}
