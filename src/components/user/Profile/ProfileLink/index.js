import './index.css';
import { NavLink } from 'react-router-dom';

export default function ProfileLink({ link, text, className, onClick}) {
    return (
        <NavLink to={link} className={`profile__link ${className ? className : ''}`} onClick={onClick}>{text}</NavLink>
    )
}