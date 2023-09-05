import './index.css';
import MoviesCardButton from "..";

export default function MoviesCardLikeButton({ isSaved }) {
    const className = isSaved ?
        'movies-card__button_type_like' :
        'movies-card__button_type_dislike'
    return (
        <MoviesCardButton className={className} />
    )
}