import './index.css';

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text footer__text_type_underlined">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <ul className="footer__links-list">
                <li>
                    <a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
                </li>
                <li>
                    <a href="https://github.com/arrayumi/" className="footer__link">Github</a>
                </li>
            </ul>
            <p className="footer__text footer__text_type_copyright">©{new Date().getFullYear()}</p>
        </footer>
    )
}