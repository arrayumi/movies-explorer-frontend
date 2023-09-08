import MoviesPage from "../common/MoviesPage";

export default function SavedMovies({ isLoggedIn, savedMovies, handleDeleteMovie }) {

    function handleSearch(e) {
        e.preventDefault();
    }

    return (
        <MoviesPage 
        movies={savedMovies} 
        isLoggedIn={isLoggedIn} 
        handleDeleteMovie={handleDeleteMovie} 
        handleSearch={handleSearch}/>
    )
}