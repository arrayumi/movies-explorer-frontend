import './index.css';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import Navigation from '../Navigation';

export default function Header({isAuthorized}) {
    const location = useLocation();
    return (
        <header className={`header ${location.pathname === '/' ? 'header_type_main' : ''}`}>
            <NavLink to="/" className="header__logo-link">
                <img src={logo} className="header__logo" alt="Лого." />
            </NavLink>
            <Navigation isPopup={false} isAuthorized={isAuthorized}/>
            <button className={`header__burger-menu${!isAuthorized ? ' header__burger-menu_type_auth' : ''}`} type="button"></button>
        </header>
    )
}