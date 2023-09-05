import './index.css';
import { NavLink } from 'react-router-dom';

export default function AuthLink({...params}) {
    return(
        <div className="auth__link-container">
            <span className="auth__link-span">{params.linkSpan}</span>
            <NavLink to={params.path} className="auth__link">{params.link}</NavLink>
        </div>
    )
}