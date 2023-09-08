import MoviesPage from "../common/MoviesPage";
import moviesApi from "../../../utils/MoviesApi";

import { useState} from "react";

export default function Movies({ movies, setMovies, isLoggedIn, handleSaveMovie, handleDeleteMovie, savedMovieCheck }) {

    const [isLoadingMovies, setIsLoadingMovies] = useState(false);
    const [moviesNotFound, setMoviesNotFound] = useState(false);

    function handleSearch(e) {
        e.preventDefault();
        setIsLoadingMovies(true);
        const movies = JSON.parse(localStorage.getItem('movies'));
        localStorage.setItem('search-result', e.target.elements.search.value);
        movies === null ?
            moviesApi.getMovies()
                .then(movies => {
                    if (!movies) setMoviesNotFound(true);
                    console.log('loading')
                    setMovies(movies);
                    localStorage.setItem('movies', JSON.stringify(movies));
    
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    setIsLoadingMovies(false);
                })
            :
            setMovies(movies);
            setIsLoadingMovies(false);
    }

    return (
        <MoviesPage
            movies={movies}
            isLoggedIn={isLoggedIn}
            handleSearch={handleSearch}
            isLoadingMovies={isLoadingMovies}
            moviesNotFound={moviesNotFound}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
            savedMovieCheck={savedMovieCheck} />
    )
}