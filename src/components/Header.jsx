import { Link } from "react-router-dom";
import logoFood from '../img/logo-food.png';

function Header() {
    return (
        <div className="nav-wrapper purple darken-4 header">
            <div className="nav-container nav-box">
                <Link to="/" className="brand-logo logo"><img className='logo-img' src={logoFood} alt='logo-food' /></Link>
                <ul id="nav-mobile" className="navi">
                    <li>
                        <a className='nav-text' href="https://github.com/Brokenbass90" target="_blank" rel="noreferrer">Repo</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export {Header};