import './index.css';
import Article from '../Article';
import Tech from './Tech';
import { TECHS } from '../../../utils/constants';

export default function Techs() {
    const techsList = TECHS.map((tech, index) => <Tech tech={tech} key={index} />)

    return (
        <Article sectionClassName="techs" titleClassName="techs__title" title="Технологии" navLink="techs">
            <article>
                <h3 className="techs__subtitle">7 технологий</h3>
                <p className="techs__caption">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__list">
                    {techsList}
                </ul>
            </article>
        </Article>
    )
}