import './index.css';

export default function FilterCheckbox() {
    return (
        <label className="search-form__checkbox-field">
            <input className="search-form__checkbox" type="checkbox"></input>
            <p className="search-form__checkbox-title">Короткометражки</p>
        </label>
    )
}