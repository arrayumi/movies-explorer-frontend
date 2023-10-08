import MoviesPage from "../common/MoviesPage";
import { useState } from "react";

export default function SavedMovies({ isLoggedIn, savedMovies, handleDeleteMovie }) {

    const [moviesNotFound, setMoviesNotFound] = useState(false);

    function handleSearch(e) {
        e.preventDefault();
    }


    return (
        <MoviesPage 
        movies={savedMovies} 
        isLoggedIn={isLoggedIn} 
        handleDeleteMovie={handleDeleteMovie} 
        handleSearch={handleSearch}
        moviesNotFound={moviesNotFound}
        setMoviesNotFound={setMoviesNotFound}/>
    )
}