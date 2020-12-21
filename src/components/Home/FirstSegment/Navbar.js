import Menu from "../Menu.js";
import logo from "../../../images/logo.jpg";

//Link router
import {Link} from "react-router-dom";

const Navbar = (props) => {
    return(
        <nav className="navbar">
            <Menu />
            <Link to="/">
                    <img src={logo} alt="logo" id="projectLogo" ></img>
            </Link>
        </nav>
    );
}

export default Navbar;