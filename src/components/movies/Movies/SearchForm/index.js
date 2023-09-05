import './index.css';
import FilterCheckbox from './FilterCheckbox';

export default function SearchForm() {
    return (
        <>
            <form className="search-form">
                <div className="search-form__input-container">
                    <label className="search-form__field">
                        <input className="search-form__input" placeholder="Фильм" required></input>
                        <span className="search-form__error"></span>
                    </label>
                    <button type="submit" className="search-form__button"></button>
                </div>
                <FilterCheckbox />
            </form>
        </>
    )
}