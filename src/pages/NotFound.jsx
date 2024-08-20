import React from "react";
import Back from "../assets/img/onboarding/background.png";
import Dog from "../assets/img/dog_404.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();
	const handleHomePage = () => {
		navigate("/welcome");
	};
	return (
		<div className="bg-primary">
			<div className="flex flex-col justify-center items-center text-center h-screen gap-20">
				<div className="relative">
					<img src={Back} alt="Background"></img>
				</div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]">
					<img src={Dog} alt="Dog"></img>
				</div>
				<div className="flex flex-col items-center gap-6">
					<h1 className="font-poppins text-white font-bold text-3xl">
						Page Not Found :(
					</h1>
					<Button
						variant="welcome_secondary"
						className="mx-auto w-[280px]"
						txt="Return to homepage"
						onClick={handleHomePage}
					/>
				</div>
			</div>
		</div>
	);
}
