import './index.css';
import NavigationLink from './NavigationLink';
import { useLocation } from 'react-router-dom';

export default function Navigation({ isAuthorized, isPopup = false }) {
    const location = useLocation();
    return (
        <>
            {isAuthorized ?
                <nav className="navigation">
                    <ul className={`navigation__links-list ${isPopup && 'navigation__links-list_type_popup'}`} >
                        {isPopup && <NavigationLink link="/" title="Главная" />}
                        <NavigationLink link="/movies" title="Фильмы" />
                        <NavigationLink link="/saved-movies" title="Сохранённые фильмы" />
                        <NavigationLink link="/profile" title="Аккаунт" isLinkToProfile={true} isPopup={isPopup} />
                    </ul >
                </nav > :

                <nav className="navigation navigation_type_auth">
                    < ul className="navigation__links-list navigation__links-list_type_auth" >
                        <NavigationLink link="/" title="Регистрация" className="navigation__link_type_auth" />
                        <NavigationLink link="/" title="Войти" className="navigation__link_type_auth navigation__link_type_button" />
                    </ul >
                </nav >
            }
        </>
    )
}