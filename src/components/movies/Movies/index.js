import MoviesPage from "../common/MoviesPage";
import moviesApi from "../../../utils/MoviesApi";

import { useState, useEffect } from "react";

export default function Movies({ isLoggedIn }) {

    const [movies, setMovies] = useState([]);
    const [isLoadingMovies, setIsLoadingMovies] = useState(false);
    const [moviesNotFound, setMoviesNotFound] = useState(false);

    function handleSearch(e) {
        e.preventDefault();
        setIsLoadingMovies(true);
        moviesApi.getMovies()
            .then(movies => {
                if (!movies) setMoviesNotFound(true);
                setMovies(movies);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setIsLoadingMovies(false);
            })
    }

    return (
        <MoviesPage 
        movies={movies} 
        isLoggedIn={isLoggedIn} 
        handleSearch={handleSearch} 
        isLoadingMovies={isLoadingMovies} 
        moviesNotFound={moviesNotFound} />
    )
}