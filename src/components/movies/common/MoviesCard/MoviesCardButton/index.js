import './index.css';

export default function MoviesCardButton({ className }) {
    return (
        <button type="button" className={
            `movies-card__button ${className}`}>
        </button>
    )
}