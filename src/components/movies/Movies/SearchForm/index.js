import './index.css';
import FilterCheckbox from './FilterCheckbox';

export default function SearchForm() {
    return (
        <>
            <form className="search-form">
                <label className="search-form__field">
                    <input className="search-form__input" placeholder="Фильм"></input>
                    <span className="search-form__error"></span>
                    <button type="submit" className="search-form__button"></button>
                </label>
                <FilterCheckbox />
            </form>
        </>
    )
}