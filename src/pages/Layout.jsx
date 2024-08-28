import { Outlet, Link } from "react-router-dom";
import FooterMenu from "../components/Menu/FooterMenu";

const Layout = () => {
	return (
		<>
			<Outlet />
			<FooterMenu />
		</>
	);
};

export default Layout;
