import './index.css';
import Header from '../../../common/Header';
import Footer from '../../../common/Footer';
import SearchForm from '../SearchForm'
import MoviesCardList from '../MoviesCardList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { filterShortMovies } from '../../../../utils/filterMovies';

export default function MoviesPage({
    movies,
    isLoggedIn,
    handleSearch,
    isLoadingMovies,
    moviesNotFound,
    handleSaveMovie,
    handleDeleteMovie,
    savedMovieCheck,
    setMoviesNotFound,
    sendingData }) {

    const location = useLocation();
    const isSavedMoviePath = location.pathname === "/saved-movies";

    const [filteredMovies, setFilteredMovies] = useState([]);

    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [moviesList, setMoviesList] = useState([]);

    let moviesToRender;
    if (isSavedMoviePath) {
        if (filteredMovies.length === 0) {
            moviesToRender = movies;
        } else {
            moviesToRender = filteredMovies;
        }
    } else {
        moviesToRender = filteredMovies;
    }

    useEffect(() => setMoviesList(moviesToRender), [moviesToRender])


    useEffect(() => {
        if (isCheckboxChecked) {
            setMoviesList(filterShortMovies(moviesToRender));
        } else {
            setMoviesList(moviesToRender);
        }
    }, [isCheckboxChecked, moviesToRender])


    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main className="movies" aria-label="Фильмы.">
                <SearchForm isSavedMoviePath={isSavedMoviePath}
                    handleSearch={handleSearch}
                    movies={movies}
                    filteredMovies={filteredMovies}
                    setFilteredMovies={setFilteredMovies}
                    setMoviesNotFound={setMoviesNotFound}
                    sendingData={sendingData}
                    isCheckboxChecked={isCheckboxChecked}
                    setIsCheckboxChecked={setIsCheckboxChecked} />
                <MoviesCardList movies={moviesList}
                    isLoadingMovies={isLoadingMovies}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                    savedMovieCheck={savedMovieCheck}
                    isSavedMovieCard={isSavedMoviePath}
                    moviesNotFound={moviesNotFound} />
            </main>
            <Footer />
        </>
    )
}