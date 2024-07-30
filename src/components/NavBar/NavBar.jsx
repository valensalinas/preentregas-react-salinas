import "./NavBar.scss"
import CartWidget from "./CartWidget/CartWidget.jsx";
import logo from "../../assets/img/escudo_cideco.png";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="brand">
                <img src={logo} alt="" />
            </Link>

            <ul className="ul-navbar">
                <Link to="/categoria/camperas" className="category">
                    <p>Camperas</p>
                </Link>

                <Link to="/categoria/pantalones" className="category">
                    <p>Pantalones</p>
                </Link>

                <Link to="/categoria/remeras" className="category">
                    <p>Remeras</p>
                </Link>

                <Link to="/categoria/medias" className="category">
                    <p>Medias</p>
                </Link>
            </ul>

            <CartWidget />
        </nav>
    );
};

export default NavBar;
