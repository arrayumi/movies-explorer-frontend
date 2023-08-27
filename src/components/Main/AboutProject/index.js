import './index.css';
import Article from '../Article';

export default function AboutProject() {
    return (
        <Article sectionClassName="about-project" titleClassName="about-project__title" title="О проекте" navLink="about-project">
            <article>
                <ul className="about-project__list">
                    <li>
                        <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project__caption">Составление плана, работу над бэкендом, вёрстку,
                            добавление функциональности и финальные доработки.</p>
                    </li>
                    <li>
                        <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                        <p className="about-project__caption">У каждого этапа был мягкий и жёсткий дедлайн,
                            которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </li>
                </ul>

                <div className="about-project__timescale">
                    <div className="about-project__timescale-item">
                        <div className="about-project__timescale-block about-project__timescale-block_color_green">1 неделя</div>
                        <div className="about-project__timescale-caption">Back-end</div>
                    </div>
                    <div className="about-project__timescale-item">
                        <div className="about-project__timescale-block about-project__timescale-block_color_gray">4 недели</div>
                        <div className="about-project__timescale-caption">Front-end</div>
                    </div>
                </div>
            </article>
        </Article>
    )
}