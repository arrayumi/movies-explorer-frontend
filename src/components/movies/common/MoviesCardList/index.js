import './index.css';
import { movies } from '../../../../utils/constants';
import MoviesCard from '../MoviesCard';

export default function MoviesCardList() {
    const moviesCardList = movies.map((movie, index) =>
        <MoviesCard movie={movie} isSaved={true} isSavedMovieCard={false} key={index} />)
    return (
        <ul className=" page__element movies-cardlist">{moviesCardList}</ul>
    )
}