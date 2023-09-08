import './index.css';
import FilterCheckbox from './FilterCheckbox';
import useFormWithValidation from '../../../../hooks/UseFormWithValidation';
import { useEffect, useState } from 'react';
import { filterMovies } from '../../../../utils/filterMovies';

export default function SearchForm({ handleSearch, movies, setFilteredMovies, isSavedMoviePath }) {

    const { values, handleChange, isValid } = useFormWithValidation();
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    useEffect(() => {
        if (!isSavedMoviePath) {
            const searchRes = localStorage.getItem('search-result');
            const checkboxState = JSON.parse(localStorage.getItem('is-checkbox-checked'));
            if (searchRes !== null) values.search = searchRes;
            if (checkboxState !== null) checkboxState === 'true' ? setIsCheckboxChecked(true) : setIsCheckboxChecked(false);
        }
    }, [])

    function handleSubmit(e) {
        handleSearch(e);
        setFilteredMovies(filterMovies(movies, values.search, isCheckboxChecked));
        if (!isSavedMoviePath) {
            localStorage.setItem('search-result', values.search);
            localStorage.setItem('is-checkbox-cheked', JSON.stringify(isCheckboxChecked));
        }
    }

    function handleCheckbox() {
        setIsCheckboxChecked(!isCheckboxChecked);
    }

    return (
        <>
            <form className="search-form" noValidate onSubmit={handleSubmit}>
                <div className="search-form__input-container">
                    <label className="search-form__field">
                        <input name="search" className="search-form__input" placeholder="Фильм" required value={values.search ?? ''} onChange={handleChange}></input>
                        {!isValid && <span className="search-form__error">Нужно ввести ключевое слово</span>}
                    </label>
                    <button type="submit" className="search-form__button"></button>
                </div>
                <FilterCheckbox isCheckboxChecked={isCheckboxChecked} handleCheckbox={handleCheckbox} />
            </form>
        </>
    )
}