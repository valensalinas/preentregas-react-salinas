import "./NavBar.scss"
import logoCideco from "../../assets/img/escudo_cideco.png"
import CartWidget from "./CartWidget/CartWidget.jsx"

const NavBar = () => {

    return(
        <nav className="navbar">
            <div className="brand">
                <img src={logoCideco} width={50} alt="" />
                <h1>CIDECO Handball</h1>
            </div>

            <ul className="ul">
                <li><a href="">Camperas</a></li>
                <li><a href="">Buzos</a></li>
                <li><a href="">Remeras</a></li>
                <li><a href="">Medias</a></li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar