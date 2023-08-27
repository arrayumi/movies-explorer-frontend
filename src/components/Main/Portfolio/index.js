import './index.css';

export default function Portfolio() {
    return (
        <section className="portfolio page__element">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__links-list">
                <li className="portfolio__links-list-item">
                    <a href="https://arrayumi.github.io/how-to-learn/" className="portfolio__link">
                        <p className="portfolio__link-text">Cтатичный сайт</p>
                        <div className="portfolio__link-logo"></div>
                    </a>
                </li>
                <li className="portfolio__links-list-item">
                    <a href="https://arrayumi.github.io/russian-travel/" className="portfolio__link">
                        <p className="portfolio__link-text">Адаптивный сайт</p>
                        <div className="portfolio__link-logo"></div>
                    </a>
                </li>
                <li className="portfolio__links-list-item">
                    <a href="https://arrayumi.mesto.nomoredomains.sbs/" className="portfolio__link">
                        <p className="portfolio__link-text">Одностраничное приложение</p>
                        <div className="portfolio__link-logo"></div>
                    </a>
                </li>

            </ul>
        </section>
    )
}