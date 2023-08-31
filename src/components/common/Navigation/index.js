import './index.css';
import NavigationLink from './NavigationLink';

export default function Navigation({ isAuthorized, isPopup }) {
    return (
        <>
            {isAuthorized ?
                <nav className="navigation">
                    <ul className="navigation__links-list" >
                        <NavigationLink link="/movies" title="Фильмы" />
                        <NavigationLink link="/saved-movies" title="Сохранённые фильмы" />
                        <NavigationLink link="/profile" title="Аккаунт" isLinkToProfile={true} />
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