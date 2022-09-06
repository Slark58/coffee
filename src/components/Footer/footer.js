import './footer.scss'
import BlackCoffee from '../../icons/noBlack.svg'
import coffeeBlack from '../../icons/fullBlack.svg';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="nav center">
                <a href="http://localhost:3000/" className="nav__link BlackText"><img src={BlackCoffee} alt="coffee"/>Coffee house</a>
                <ul className="nav__list">
                    <li className="nav__lists"><a className="nav__link BlackText" href="http://localhost:3000/">Our coffee</a></li>
                    <li className="nav__lists"><a className="nav__link BlackText" href="http://localhost:3000/">For your pleasure</a></li>
                </ul>
            </div>

            <div className="line">
                    <span className="line__Left Black"></span>
                    <img src={coffeeBlack} alt="coffee" />
                    <span className="line__Right Black"></span>
            </div>
        </footer>
    )
}

export default Footer;