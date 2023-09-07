import MoviesPage from "../common/MoviesPage";
import moviesApi from "../../../utils/MoviesApi";

import { useState, useEffect } from "react";

export default function Movies({isLoggedIn}) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        moviesApi.getMovies()
            .then(movies => setMovies(movies))
            .catch(err => {
                console.log(err);
            })}
    , []);

    return (
        <MoviesPage movies={movies} isLoggedIn={isLoggedIn} />
    )
}