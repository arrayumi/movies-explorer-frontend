import './index.css';
import { Link } from 'react-router-dom';

export default function Page404() {
    return (
        <main className="page-404">
            <h1 className="page-404__title">404</h1>
            <p className="page-404__caption">Страница не найдена</p>
            <Link to={-1} className="page-404__link">
                Назад
            </Link>
        </main>
    )
}