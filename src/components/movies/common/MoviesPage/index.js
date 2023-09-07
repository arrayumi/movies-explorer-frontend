import './index.css';
import Header from '../../../common/Header';
import Footer from '../../../common/Footer';
import SearchForm from '../SearchForm'
import MoviesCardList from '../MoviesCardList';

export default function MoviesPage({movies, isLoggedIn, handleSearch, isLoadingMovies, moviesNotFound}) {
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main className="movies" aria-label="Фильмы.">
                <SearchForm handleSearch={handleSearch}/>
                <MoviesCardList movies={movies} isLoadingMovies={isLoadingMovies} />
                {moviesNotFound && <span className="movies__not-found">Ничего не найдено.</span>}
            </main>
            <Footer />
        </>
    )
}