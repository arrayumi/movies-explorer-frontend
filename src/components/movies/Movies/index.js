import './index.css';
import Header from '../../common/Header';
import Footer from "../../common/Footer";
import SearchForm from "./SearchForm";
import MoviesCardList from "../common/MoviesCardList";

export default function Movies() {
    return (
        <>
            <Header isAuthorized={true} />
            <main className="movies" aria-label="Фильмы.">
                <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
        </>
    )
}