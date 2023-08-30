import './index.css';

export default function NavTab() {
    return (
        <nav className="nav-tab main-element" aria-label="Меню навигации по странице.">
            <ul className="nav-tab__list">
                <li><a href="#about-project" className="nav-tab__link">О&nbsp;проекте</a></li>
                <li><a href="#techs" className="nav-tab__link">Технологии</a></li>
                <li><a href="#about-me" className="nav-tab__link">Студент</a></li>
            </ul>
        </nav>
    )
}