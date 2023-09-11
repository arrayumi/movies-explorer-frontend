import MoviesPage from "../common/MoviesPage";
import moviesApi from "../../../utils/MoviesApi";

import { useEffect, useState } from "react";

export default function Movies({ movies, setMovies, isLoggedIn, handleSaveMovie,
    handleDeleteMovie, savedMovieCheck, sendingData, setSendingData
}) {

    const [isLoadingMovies, setIsLoadingMovies] = useState(false);
    const [moviesNotFound, setMoviesNotFound] = useState(false);

    useEffect(() => {
        const moviesInStorage = JSON.parse(localStorage.getItem('movies'));
        moviesInStorage !== null && setMovies(moviesInStorage);
    }, [])

    function handleSearch(e) {
        e.preventDefault();
        setIsLoadingMovies(true);
        const moviesInStorage = JSON.parse(localStorage.getItem('movies'));
        localStorage.setItem('search-result', e.target.elements.search.value);
        if (moviesInStorage === null) {
            setSendingData(true);
            moviesApi.getMovies()
                .then(movies => {
                    setMoviesNotFound(false);
                    setMovies(movies);
                    localStorage.setItem('movies', JSON.stringify(movies));

                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    setIsLoadingMovies(false);
                    setSendingData(false);
                })
        } else {
            setMovies(moviesInStorage);
            setMoviesNotFound(false);
            setIsLoadingMovies(false);
        }
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
            savedMovieCheck={savedMovieCheck}
            setMoviesNotFound={setMoviesNotFound}
            sendingData={sendingData} />
    )
}