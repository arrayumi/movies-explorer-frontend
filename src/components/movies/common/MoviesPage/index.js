import './index.css';
import Header from '../../../common/Header';
import Footer from '../../../common/Footer';
import SearchForm from '../../Movies/SearchForm';
import MoviesCardList from '../MoviesCardList';

export default function MoviesPage({movies, isLoggedIn}) {
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main className="movies" aria-label="Фильмы.">
                <SearchForm />
                <MoviesCardList movies={movies} />
            </main>
            <Footer />
        </>
    )
}