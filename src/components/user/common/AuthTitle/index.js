import './index.css';
import logo from '../../../../images/logo.svg';
import { NavLink } from 'react-router-dom';

export default function AuthTitle({ title }) {
    return (
        <div className="auth__title-container">
            <NavLink to="/" className="auth__logo-link">
                <img src={logo} className="auth__title-logo" alt="Лого." />
            </NavLink>
            <h1 className="auth__title">{title}</h1>
        </div>
    )
}