import './index.css';
import MoviesCard from '../MoviesCard';
import More from './More';
import Preloader from '../Preloader';
import { useState, useEffect } from 'react';
import { moviesListParams } from '../../../../utils/moviesListParams';

export default function MoviesCardList({ movies, isLoadingMovies, handleSaveMovie, handleDeleteMovie, savedMovieCheck }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [moviesListLength, setMoviesListLength] = useState(12);
  const [isMoreButton, setIsMoreButton] = useState(false);

  const moviesCardList = movies.slice(0, moviesListLength).map((movie) =>
    <MoviesCard movie={movie} isSaved={savedMovieCheck(movie)} isSavedMovieCard={false} key={movie.id} handleSaveMovie={handleSaveMovie} handleDeleteMovie={handleDeleteMovie} />)

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
    if (width > moviesListParams.desktop.width) {
      setMoviesListLength(moviesListParams.desktop.movies.total);
    } else if (
      width <= moviesListParams.desktop.width &&
      width >= moviesListParams.mobile.width
    ) {
      setMoviesListLength(moviesListParams.tablet.movies.total);
    } else {
      setMoviesListLength(moviesListParams.mobile.movies.total);
    }
  }

  useEffect(() => {
    countMoviesListLength(width);
  }, [width]);

  useEffect(() => {
    // console.log(moviesListLength, movies.length)
    moviesListLength < movies.length ?  setIsMoreButton(true) : setIsMoreButton(false);
  }
    , [moviesCardList]);


  function showMoreMovies() {
    if (width > moviesListParams.desktop.width) {
      setMoviesListLength(moviesListLength + moviesListParams.desktop.movies.more);
    } else if (
      width <= moviesListParams.desktop.width &&
      width >= moviesListParams.mobile.width
    ) {
      setMoviesListLength(moviesListLength + moviesListParams.tablet.movies.more);
    } else {
      setMoviesListLength(moviesListLength + moviesListParams.mobile.movies.more);
    }
  }

  return (
    <>
      <ul className="movies__cardlist">{moviesCardList}</ul>
      {isLoadingMovies && <Preloader />}
      <More isMoreButton={isMoreButton} showMoreMovies={showMoreMovies} />
    </>
  )
}