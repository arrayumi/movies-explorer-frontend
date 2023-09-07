import './index.css';
import MoviesCard from '../MoviesCard';
import More from './More';
import Preloader from '../Preloader'

export default function MoviesCardList({ movies, isLoadingMovies }) {
    const moviesCardList = movies.map((movie, index) =>
        <MoviesCard movie={movie} isSaved={true} isSavedMovieCard={false} key={index} />)
        
    return (
        <>
            <ul className="movies__cardlist">{moviesCardList}</ul>
            {isLoadingMovies && <Preloader />}
            <More isMoreCards={false} />
        </>
    )
}