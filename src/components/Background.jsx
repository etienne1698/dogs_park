import React from "react";

export default function Background({ title }) {
	return (
		<div className="h-screen">
			<div
				className="bg-primary w-full h-1/4 flex justify-center items-center"
				style={{
					clipPath: "ellipse(80% 100% at 50% 0%)",
				}}
			>
				<h1 className="font-poppins text-secondary text-center p-4 text-h2">
					{title}
				</h1>
			</div>
		</div>
	);
}
