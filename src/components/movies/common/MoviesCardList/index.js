import './index.css';
import { movies } from '../../../../utils/constants';
import MoviesCard from '../MoviesCard';
import More from './More';

export default function MoviesCardList() {
    const moviesCardList = movies.map((movie, index) =>
        <MoviesCard movie={movie} isSaved={true} isSavedMovieCard={false} key={index} />)
    return (
        <>
            <ul className="movies-cardlist">{moviesCardList}</ul>
            <More isMoreCards={true} />
        </>
    )
}