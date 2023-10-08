import './index.css';
import MoviesCardButton from "..";

export default function MoviesCardLikeButton({ isSaved, handleSaveMovie, movie, handleDeleteMovie }) {
    const className = isSaved ?
        'movies-card__button_type_like' :
        'movies-card__button_type_dislike'
    return (
        <MoviesCardButton className={className} handleSaveMovie={handleSaveMovie} movie={movie} handleDeleteMovie={handleDeleteMovie}
        isSaved={isSaved}/>
    )
}