import './index.css';
import FilterCheckbox from './FilterCheckbox';
import useFormWithValidation from '../../../../hooks/UseFormWithValidation';
import { useEffect, useState } from 'react';
import { filterMovies } from '../../../../utils/filterMovies';

export default function SearchForm({ handleSearch, movies, filteredMovies, setFilteredMovies,
    isSavedMoviePath, setMoviesNotFound, sendingData, isCheckboxChecked, setIsCheckboxChecked, moviesToRender }) {

    const { values, handleChange, isValid, setIsValid } = useFormWithValidation();

    const [isSavedMoviesListFiltered, setIsSavedMoviesListFiltered] = useState(false);

    useEffect(() => {
        if (!isSavedMoviePath) {
            const searchQuery = localStorage.getItem('search-query');
            const checkboxState = JSON.parse(localStorage.getItem('is-checkbox-checked'));
            const searchResult = JSON.parse(localStorage.getItem('search-result'));
            if (searchQuery !== null) values.search = searchQuery;
            if (checkboxState !== null) setIsCheckboxChecked(checkboxState);
            if (searchResult !== null) setFilteredMovies(searchResult);
        }
    }, [])

    useEffect(() => {
        if (isSavedMoviesListFiltered) {
            const searchResults = filterMovies(movies, values.search, isCheckboxChecked);
            searchResults.length > 0 ? setMoviesNotFound(false) : setMoviesNotFound(true);
            setFilteredMovies(searchResults);
        }
    }, [movies])

    function handleSubmit(e) {
        if (values.search === undefined || values.search === '') {
            e.preventDefault();
            setIsValid(false);
            setFilteredMovies([]);
        } else {
            handleSearch(e);
            const searchResults = filterMovies(movies, values.search, isCheckboxChecked);
            searchResults.length > 0 ? setMoviesNotFound(false) : setMoviesNotFound(true);
            setFilteredMovies(searchResults);
            if (!isSavedMoviePath) {
                localStorage.setItem('search-query', values.search);
                localStorage.setItem('is-checkbox-checked', JSON.stringify(isCheckboxChecked));
                localStorage.setItem('search-result', JSON.stringify(searchResults));
            } else {
                setIsSavedMoviesListFiltered(true);
            }
        }
    }

    function handleCheckbox() {
        setIsCheckboxChecked(isCheckboxChecked => !isCheckboxChecked);
        localStorage.setItem('is-checkbox-checked', JSON.stringify(!isCheckboxChecked));
    }

    return (
        <>
            <form className="search-form" noValidate onSubmit={handleSubmit}>
                <div className="search-form__input-container">
                    <label className="search-form__field">
                        <input name="search" className="search-form__input" placeholder="Фильм" required
                            value={values.search ?? ''} onChange={handleChange}
                            disabled={sendingData}></input>
                        {!isValid && <span className="search-form__error">Нужно ввести ключевое слово</span>}
                    </label>
                    <button type="submit" className="search-form__button" disabled={sendingData}></button>
                </div>
                <FilterCheckbox isCheckboxChecked={isCheckboxChecked} handleCheckbox={handleCheckbox} />
            </form>
        </>
    )
}