import './index.css';
import { NavLink, useLocation } from 'react-router-dom';

export default function NavigationLink({ link, title, isLinkToProfile, className, type }) {
    const location = useLocation();
    return (
        <li className={`navigation__links-item ${isLinkToProfile ? 'navigation__links-item_type_profile' : ''}`}>

                <NavLink to={link} className={`navigation__link ${className}`}>
                    {title}
                </NavLink>


            {isLinkToProfile ?
                <div className={`navigation__profile-logo 
                ${location.pathname === '/' && 'navigation__profile-logo_type_main'}`}>
                </div> :
                null}
        </li>
    )
}