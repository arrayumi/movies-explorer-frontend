import './index.css';
import MoviesCardButton from '..';

export default function SavedMoviesCardButton({ isSaved, movie, handleDeleteMovie, handleSaveMovie }) {
return (
    <MoviesCardButton className='movies-card__button_type_delete' isSaved={isSaved} movie={movie} handleDeleteMovie={handleDeleteMovie} handleSaveMovie={handleSaveMovie}/>
)
}