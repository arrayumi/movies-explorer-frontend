import './index.css';

export default function More({ isMoreCards }) {
    return (
        <div className={`movies__more ${isMoreCards ?
            'movies__more_enabled' :
            'movies__more_disabled'}`}>
            {isMoreCards ?
                <button type="button" className="movies__more-button">Ещё</button> :
                null}
        </div>
    )
}