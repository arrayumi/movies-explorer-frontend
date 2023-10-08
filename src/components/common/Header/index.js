import './index.css';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import Navigation from '../Navigation';

export default function Header({ isLoggedIn }) {
    const location = useLocation();

    function onClick() {
        document.querySelector('.nav-popup').classList.add('nav-popup_active');
    }

    return (
        <header className={`header ${location.pathname === '/' ? 'header_type_main' : ''}`}>
            <NavLink to="/" className="header__logo-link">
                <img src={logo} className="header__logo" alt="Лого." />
            </NavLink>
            <Navigation isPopup={false} isLoggedIn={isLoggedIn} />
            {isLoggedIn &&
                <button className={`header__burger-menu${isLoggedIn ? ' header__burger-menu_type_auth' : ''}`} type="button" onClick={onClick}>
                </button>
            }
        </header>
    )
}