import './index.css';

export default function FilterCheckbox() {
    return (
        <label className="search-form__checkbox-field">
            <input className="search-form__default-checkbox" type="checkbox"></input>
            <span className="search-form__custom-checkbox"></span>
            <span className="search-form__checkbox-title">Короткометражки</span>
        </label>
    )
}