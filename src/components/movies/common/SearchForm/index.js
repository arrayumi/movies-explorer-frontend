import './index.css';
import FilterCheckbox from './FilterCheckbox';
import useFormWithValidation from '../../../../hooks/UseFormWithValidation';

export default function SearchForm({handleSearch}) {
    const {values, handleChange, isValid} = useFormWithValidation();
    return (
        <>
            <form className="search-form" noValidate>
                <div className="search-form__input-container">
                    <label className="search-form__field">
                        <input name="search" className="search-form__input" placeholder="Фильм" required value={values.search ?? ''} onChange={handleChange}></input>
                        {!isValid && <span className="search-form__error">Нужно ввести ключевое слово</span>}
                    </label>
                    <button type="submit" className="search-form__button" onClick={handleSearch}></button>
                </div>
                <FilterCheckbox />
            </form>
        </>
    )
}