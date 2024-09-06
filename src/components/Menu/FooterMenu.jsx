import MenuItem from "./MenuItem";
import Home from "../../assets/icones/Home.svg";
import Account from "../../assets/icones/Account.svg";
import Search from "../../assets/icones/Search.svg";
import Settings from "../../assets/icones/Settings.svg";

export default function FooterMenu() {
	const menuItems = [
		{ icon: Home, text: "Home", to: "/" },
		{ icon: Search, text: "Search", to: "/search" },
		{ icon: Settings, text: "Settings", to: "/settings" },
		{ icon: Account, text: "Account", to: "/account" },
	];

	return (
		<div className="sticky bottom-0 mx-auto w-[95%]">
			<div className="flex justify-evenly py-4 bg-white text-white shadow-lg">
				{menuItems.map((item, index) => (
					<MenuItem
						key={index}
						icon={item.icon}
						text={item.text}
						to={item.to}
					/>
				))}
			</div>
		</div>
	);
}
