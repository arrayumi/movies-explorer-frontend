import MoviesPage from "../common/MoviesPage";
import { useState, useEffect } from "react";
import mainApi from "../../../utils/MainApi";

export default function SavedMovies({isLoggedIn}) {

    const [savedMovies, setSavedMovies] = useState([]);

    useEffect(() => {
        mainApi.getSavedMovies()
            .then(movies => setSavedMovies(movies))
            .catch(err => {
                console.log(err);
            })
    }
        , []);

    console.log(savedMovies)

    return (
        <MoviesPage movies={savedMovies} isLoggedIn={isLoggedIn}/>
    )
}