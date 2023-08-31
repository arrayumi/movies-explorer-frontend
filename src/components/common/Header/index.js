import './index.css';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import Navigation from '../Navigation';
import AuthLinks from '../AuthLinks';

export default function Header({ isAuthorized }) {
    const location = useLocation();
    return (
        <header className={`header ${location.pathname === '/' && 'header_type_main'}`}>
            <NavLink to="/" className="header__logo-link">
                <img src={logo} className="header__logo" alt="Лого." />
            </NavLink>
            {isAuthorized ? <Navigation isPopup={false} /> : <AuthLinks />}
            <button className="header__burger-menu" type="button"></button>
        </header>
    )
}