import './index.css';
import Article from '../Article';
import photo from '../../../images/about-me-photo.jpg';

export default function AboutMe() {
    return (
        <Article sectionClassName="about-me" titleClassName="about-me__title" title="Студент" navLink="about-me">
            <article className="about-me__container">
                <img src={photo} alt="Фотография Анны" className="about-me__photo" />
                <div className="about-me__text-container">
                    <h3 className="about-me__name">Анна</h3>
                    <p className="about-me__caption">Фронтенд-разработчик, 29 лет</p>
                    <p className="about-me__text">Здесь будет рассказ о себе, который я еще не придумала</p>
                </div>
                <div className="about-me__link-container">
                    <a target="blank" href="https://github.com/arrayumi/" className="about-me__link">Github</a>
                </div>
            </article>
        </Article>
    )
}