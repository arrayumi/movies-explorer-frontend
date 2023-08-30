import './index.css';
import Footer from "../../common/Footer";
import SearchForm from '../Movies/SearchForm';
import MoviesCardList from "../common/MoviesCardList";

export default function SavedMovies() {
    return (
        <>
            <main>
                <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
        </>
    )
}