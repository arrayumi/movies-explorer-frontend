import './index.css';
import Header from '../../../common/Header';
import Footer from '../../../common/Footer';
import SearchForm from '../SearchForm'
import MoviesCardList from '../MoviesCardList';

export default function MoviesPage({
    movies,
    isLoggedIn,
    handleSearch,
    isLoadingMovies,
    moviesNotFound,
    handleSaveMovie,
    handleDeleteMovie,
    savedMovieCheck }) {
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main className="movies" aria-label="Фильмы.">
                <SearchForm handleSearch={handleSearch} />
                <MoviesCardList movies={movies} isLoadingMovies={isLoadingMovies} handleSaveMovie={handleSaveMovie} 
                handleDeleteMovie={handleDeleteMovie}
                savedMovieCheck={savedMovieCheck} />
                {moviesNotFound && <span className="movies__not-found">Ничего не найдено.</span>}
            </main>
            <Footer />
        </>
    )
}