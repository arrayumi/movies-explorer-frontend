import './index.css';

export default function More({ isMoreButton, showMoreMovies }) {
    return (
        <div className={`movies__more ${isMoreButton ?
            'movies__more_enabled' :
            'movies__more_disabled'}`}>
            {isMoreButton ?
                <button type="button" className="movies__more-button" onClick={showMoreMovies}>Ещё</button> :
                null}
        </div>
    )
}