import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ icon, text, to }) {
	return (
		<div className="flex items-center">
			<div className="">
				<img src={icon} alt={text} className="w-6 h-6 mx-auto cursor-pointer" />
				<Link to={to} className="text-gray-500 font-poppins font-medium">
					{text}
				</Link>
			</div>
		</div>
	);
}
