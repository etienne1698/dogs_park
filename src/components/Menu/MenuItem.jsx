import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuItem({ icon, text, to }) {
	return (
		<div className="flex items-center">
			<NavLink
				to={to}
				className={({ isActive }) =>
					`flex flex-col items-center space-y-1 ${
						isActive ? "text-primary" : "text-gray-500"
					}`
				}
			>
				<img src={icon} alt={text} className="w-6 h-6 mx-auto cursor-pointer" />
				<span className="font-poppins font-medium">{text}</span>
			</NavLink>
		</div>
	);
}
