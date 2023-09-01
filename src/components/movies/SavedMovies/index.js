import './index.css';
import Header from '../../common/Header';
import Footer from "../../common/Footer";
import SearchForm from '../Movies/SearchForm';
import MoviesCardList from "../common/MoviesCardList";

export default function SavedMovies() {
    return (
        <>
            <Header isAuthorized={true} />
            <main className="saved-movies">
                <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
        </>
    )
}