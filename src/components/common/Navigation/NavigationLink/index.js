import './index.css';
import { NavLink, useLocation } from 'react-router-dom';

export default function NavigationLink({ link, title, isLinkToProfile, className, isPopup }) {
    const location = useLocation();

    return (
        <li className={`navigation__links-item 
        ${(isLinkToProfile && !isPopup) ? 'navigation__links-item_type_profile' : ''}
        ${isPopup ? 'navigation__links-item_type_popup' : ''}
        `}>

                <NavLink to={link} className={`navigation__link 
                ${className ? className : ''}
                ${location.pathname === link ? 'navigation__link_active' : ''}
                `}>
                    {title}
                </NavLink>


            {isLinkToProfile ?
                <div className={`navigation__profile-logo 
                ${(location.pathname === '/' && !isPopup) ? 'navigation__profile-logo_type_main' : ''}`}>
                </div> :
                null}
        </li>
    )
}