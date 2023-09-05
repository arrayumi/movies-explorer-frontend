import './index.css';
import { NavLink } from 'react-router-dom';

export default function ProfileLink({ link, text, className }) {
    return (
        <NavLink to={link} className={`profile__link ${className ? className : ''}`}>{text}</NavLink>
    )
}