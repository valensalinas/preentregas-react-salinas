import "./Footer.scss";
import logoFacebook from "../../assets/img/facebook.png"
import logoYoutube from "../../assets/img/youtube.png"
import logoInstagram from "../../assets/img/instagram.png"
import logoX from "../../assets/img/twitter.png"

const Footer = () => {
    return (
        <footer className="footer">
            <h3>Cideco Handball ©</h3>
            <div class="redes">
                <a className="logos" href="https://www.youtube.com/@cidecohandball3681"><img src={logoYoutube}
                    alt="Logo de Youtube" /></a>
                <a className="logos" href="https://www.facebook.com/p/Cideco-Handball-Argentina-100057400271950/?locale=es_LA" target="_blank"><img
                    src={logoFacebook} alt="Logo de Facebook" /></a>
                <a className="logos" href="https://www.instagram.com/cidecohandball/?hl=es-la" target="_blank"><img src={logoInstagram}
                    alt="Logo de Instagram" /></a>
                <a className="logos" href="https://twitter.com/handballcideco?lang=es" target="_blank"><img src={logoX}
                    alt="Logo de X" /></a>
            </div>
        </footer>
    );
};

export default Footer;
