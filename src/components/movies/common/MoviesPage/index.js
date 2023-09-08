import './index.css';
import Header from '../../../common/Header';
import Footer from '../../../common/Footer';
import SearchForm from '../SearchForm'
import MoviesCardList from '../MoviesCardList';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function MoviesPage({
    movies,
    isLoggedIn,
    handleSearch,
    isLoadingMovies,
    moviesNotFound,
    handleSaveMovie,
    handleDeleteMovie,
    savedMovieCheck }) {

    const location = useLocation();
    const isSavedMoviePath = location.pathname === "/saved-movies";

    const [filteredMovies, setFilteredMovies] = useState([]);

    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main className="movies" aria-label="Фильмы.">
                <SearchForm handleSearch={handleSearch} movies={movies} filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies} />
                <MoviesCardList movies={isSavedMoviePath ? movies : filteredMovies} isLoadingMovies={isLoadingMovies} handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                    savedMovieCheck={savedMovieCheck} 
                    isSavedMovieCard={isSavedMoviePath}/>
                {moviesNotFound && <span className="movies__not-found">Ничего не найдено.</span>}
            </main>
            <Footer />
        </>
    )
}