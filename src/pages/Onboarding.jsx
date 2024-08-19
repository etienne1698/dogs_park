import React from "react";
import Button from "../components/Button";
import Paw from "../assets/img/paw.png";
import Back from "../assets/img/onboarding/background.png";
import Cloud from "../assets/img/onboarding/cloud.png";
import Dog from "../assets/img/onboarding/dogs.png";
import Step from "../assets/img/onboarding/icones/footer_btn.png";

export default function Onboarding() {
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

			<h1 className="text-h1 mb-3">
				Find a <span className="text-secondary">Dog Park</span> near you!
			</h1>
			<p className="mb-6 text-paragraph">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor
			</p>
			<Button txt="Let's go" />
			<div className="mt-5">
				<img src={Step} alt="step one" />
			</div>
		</div>
	);
}
