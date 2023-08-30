import './index.css';
import MoviesCardLikeButton from './MoviesCardButton/MoviesCardLikeButton';
import SavedMoviesCardButton from './MoviesCardButton/SavedMoviesCardButton';

export default function MoviesCard({ movie, isSaved, isSavedMovieCard }) {
    return (
        <li className="movies-card">
            <article>
                <img src={movie.image} className="movies-card__image" alt={movie.nameRU} />
                <div className="movies-card__name-container">
                    <h2 className="movies-card__name">{movie.nameRU}</h2>
                    {isSavedMovieCard ?
                        <SavedMoviesCardButton /> :
                        <MoviesCardLikeButton isSaved={isSaved} />}
                </div>
                <p className="movies-card__duration">{movie.duration}</p>
            </article>
        </li>
    )
}