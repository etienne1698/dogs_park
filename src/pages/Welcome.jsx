import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Back from "../assets/img/welcome/background.png";
import Cloud from "../assets/img/onboarding/cloud.png";
import Dog from "../assets/img/onboarding/dogs.png";
import Bench from "../assets/img/onboarding/icones/bench.png";
import Location from "../assets/img/welcome/location.png";

export default function Welcome() {
	const navigate = useNavigate();

	const handleSignIn = () => {
		navigate("/signin");
	};

	const handleSignUp = () => {
		navigate("/signup");
	};

	return (
		<div className="bg-primary">
			<div className="flex flex-col justify-center items-center text-center h-screen gap-9">
				<div className="relative mb-12">
					<img src={Back} alt="Background"></img>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[69%]">
						<img src={Cloud} alt="Cloud" className="absolute -top-3"></img>
						<img src={Dog} alt="Dog"></img>
					</div>
					<div className="absolute bottom-10 -left-8">
						<img src={Bench} alt="Bench"></img>
					</div>
					<div className="absolute top-0 -right-6">
						<img src={Location} alt="Location"></img>
					</div>
				</div>
				<div className="flex flex-col items-center gap-4">
					<Button
						txt="Sign In"
						variant="welcome_primary"
						className="mx-auto w-[218px]"
						onClick={handleSignIn}
					/>
					<p className="font-poppins text-white text-[12px] font-light">
						Don't have an account?
					</p>
					<Button
						txt="Sign Up"
						variant="welcome_secondary"
						className="mx-auto w-[218px]"
						onClick={handleSignUp}
					/>
				</div>
			</div>
		</div>
	);
}
