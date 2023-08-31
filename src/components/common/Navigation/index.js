import './index.css';
import NavigationLink from './NavigationLink';

export default function Navigation({ isPopup }) {
    return (
        <nav className="navigation">
            <ul className="navigation__links-list">
                <NavigationLink link="/movies" title="Фильмы"/>
                <NavigationLink link="/saved-movies" title="Сохранённые фильмы"/>
                <NavigationLink link="/" title="Аккаунт" isLinkToProfile={true}/>
            </ul>
        </nav>
    )
}