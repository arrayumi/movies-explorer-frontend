import './index.css';

export default function MoviesCardButton({ className, handleSaveMovie, movie, isSaved, handleDeleteMovie }) {

    function handleClick() {
        isSaved ? handleDeleteMovie(movie) : handleSaveMovie(movie);
    }

    return (
        <button type="button" className={
            `movies-card__button ${className}`} onClick={handleClick}>
        </button>
    )
}