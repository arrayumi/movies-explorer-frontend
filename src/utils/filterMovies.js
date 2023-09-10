import { SHORT_MOVIE_DURATION } from "./constants";

export function filterMovies(movies, searchQuery, isShortMovie) {
    const search = searchQuery.toLowerCase();

    let filteredMovies = movies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(search) || movie.nameRU.toLowerCase().includes(search));

    if (isShortMovie) {
        filteredMovies = filteredMovies.filter(
            (movie) => movie.duration <= SHORT_MOVIE_DURATION);
    }

    return filteredMovies;
}