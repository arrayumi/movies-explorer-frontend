import './index.css';
import MoviesCardLikeButton from './MoviesCardButton/MoviesCardLikeButton';
import SavedMoviesCardButton from './MoviesCardButton/SavedMoviesCardButton';

export default function MoviesCard({ movie, isSaved, isSavedMovieCard, handleSaveMovie, handleDeleteMovie }) {
    return (
        <li className="movies-card">
            <article>
                <img src={`https://api.nomoreparties.co/${movie.image.url}`} className="movies-card__image" alt={movie.nameRU} />
                <div className="movies-card__name-container">
                    <h2 className="movies-card__name">{movie.nameRU}</h2>
                    {isSavedMovieCard ?
                        <SavedMoviesCardButton /> :
                        <MoviesCardLikeButton isSaved={isSaved} handleSaveMovie={handleSaveMovie} movie={movie} handleDeleteMovie={handleDeleteMovie} />}
                </div>
                <p className="movies-card__duration">{movie.duration}</p>
            </article>
        </li>
    )
}