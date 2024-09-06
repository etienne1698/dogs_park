import { Outlet, Link } from "react-router-dom";
import FooterMenu from "../components/Menu/FooterMenu";

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex-grow">
				<Outlet />
			</div>
			<FooterMenu />
		</div>
	);
};

export default Layout;
