import './index.css';
import FilterCheckbox from '../FilterCheckbox';

export default function SearchForm() {
    return (
        <form className="search-form page__element">
            <input className="search-form__input"></input>
            <span className="search-form__error"></span>
            <button className="search-form__button"></button>
            <FilterCheckbox />
        </form>
    )
}