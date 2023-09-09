import './index.css';
import MoviesCard from '../MoviesCard';
import More from './More';
import Preloader from '../Preloader';
import { useState, useEffect } from 'react';
import { MOVIESLIST_PARAMS } from '../../../../utils/moviesListParams';

export default function MoviesCardList({ movies, isLoadingMovies, handleSaveMovie, handleDeleteMovie, savedMovieCheck, isSavedMovieCard }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [moviesListLength, setMoviesListLength] = useState(12);
  const [isMoreButton, setIsMoreButton] = useState(false);

  const moviesCardList = movies.slice(0, moviesListLength).map((movie) =>
    <MoviesCard
      movie={movie}
      isSaved={isSavedMovieCard ? true : savedMovieCheck(movie)}
      isSavedMovieCard={isSavedMovieCard}
      key={isSavedMovieCard ? movie._id : movie.id}
      handleSaveMovie={handleSaveMovie}
      handleDeleteMovie={handleDeleteMovie} />)

  useEffect(() => {
    const handleResize = (e) => {
      setWidth(e.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function countMoviesListLength(width) {
    if (width > MOVIESLIST_PARAMS.desktop.width) {
      setMoviesListLength(MOVIESLIST_PARAMS.desktop.movies.total);
    } else if (
      width <= MOVIESLIST_PARAMS.desktop.width &&
      width >= MOVIESLIST_PARAMS.mobile.width
    ) {
      setMoviesListLength(MOVIESLIST_PARAMS.tablet.movies.total);
    } else {
      setMoviesListLength(MOVIESLIST_PARAMS.mobile.movies.total);
    }
  }

  useEffect(() => {
    countMoviesListLength(width);
  }, [width]);

  useEffect(() => {
    // console.log(moviesListLength, movies.length)
    moviesListLength < movies.length ? setIsMoreButton(true) : setIsMoreButton(false);
  }
    , [moviesCardList]);


  function showMoreMovies() {
    if (width > MOVIESLIST_PARAMS.desktop.width) {
      setMoviesListLength(moviesListLength + MOVIESLIST_PARAMS.desktop.movies.more);
    } else if (
      width <= MOVIESLIST_PARAMS.desktop.width &&
      width >= MOVIESLIST_PARAMS.mobile.width
    ) {
      setMoviesListLength(moviesListLength + MOVIESLIST_PARAMS.tablet.movies.more);
    } else {
      setMoviesListLength(moviesListLength + MOVIESLIST_PARAMS.mobile.movies.more);
    }
  }
  console.log(moviesCardList.length)

  return (
    moviesCardList.length > 0 ?
    <>
      <ul className="movies__cardlist">{moviesCardList}</ul>
      {isLoadingMovies && <Preloader />}
      <More isMoreButton={isMoreButton} showMoreMovies={showMoreMovies} />
    </>
    :
    <span className="movies__cardlist-error">Ничего не найдено</span>
  )
}