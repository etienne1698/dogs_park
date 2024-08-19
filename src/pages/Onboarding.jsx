import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import Paw from "../assets/img/paw.png";
import Back from "../assets/img/onboarding/background.png";
import Cloud from "../assets/img/onboarding/cloud.png";
import Dog from "../assets/img/onboarding/dogs.png";
import Step from "../assets/img/onboarding/icones/footer_btn.png";

export default function Onboarding() {
	const [currentStep, setCurrentStep] = useState(0);
	const steps = [
		{
			title: (
				<>
					Find a <span className="text-secondary">Dog Park</span> near you!
				</>
			),
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		},
		{
			title: "Connect with Dog Lovers",
			description:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			title: "Track Your Dog's Activity",
			description:
				"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		},
	];

	const handleNextBtn = () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep(currentStep + 1);
		} else {
			console.log("Finish go to welcome page");
		}
	};

	return (
		<div className="flex flex-col justify-center items-center mx-8 text-center h-screen">
			<div className="w-full mb-4">
				<img className="w-[30px] ml-5 mb-2" src={Paw} alt="paw" />
				<img className="w-[30px]" src={Paw} alt="paw" />
			</div>
			<div className="relative mb-12">
				<img src={Back}></img>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[69%]">
					<img src={Cloud} className="absolute -top-3"></img>
					<img src={Dog} className=""></img>
				</div>
			</div>

			<h1 className="text-h1 mb-3 font-poppins">{steps[currentStep].title}</h1>
			<p className="mb-6 text-paragraph font-poppins">
				{steps[currentStep].description}
			</p>
			<Button
				txt={currentStep < steps.length - 2 ? "Let's go" : "Next"}
				onClick={handleNextBtn}
				variant="base"
				className="mx-auto w-[218px] mt-5"
			/>
			<div className="mt-5">
				<img src={Step} alt="step one" />
			</div>
		</div>
	);
}
