import './index.css';
import { NavLink } from 'react-router-dom';

export default function AuthLink({...props}) {
    return(
        <div className="auth__link-container">
            <span className="auth__link-span">{props.linkSpan}</span>
            <NavLink to={props.path} className="auth__link">{props.link}</NavLink>
        </div>
    )
}