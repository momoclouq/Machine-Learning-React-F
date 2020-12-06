import Menu from "../Menu.js";
import logo from "../../../images/logo.jpg";

const Navbar = (props) => {
    return(
        <nav classname="navbar">
            <Menu />
            <a href="/">
                    <img src={logo} alt="logo" id="projectLogo" ></img>
            </a>
        </nav>
    );
}

export default Navbar;