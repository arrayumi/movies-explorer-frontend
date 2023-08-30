import './index.css';

export default function More({ isMoreCards }) {
    return (
        <div className={`movies-cardlist__more movies-element ${isMoreCards ?
            'movies-cardlist__more_enabled' :
            'movies-cardlist__more_disabled'}`}>
            {isMoreCards ?
                <button type="button" className="movies-cardlist__more-button">Ещё</button> :
                null}
        </div>
    )
}