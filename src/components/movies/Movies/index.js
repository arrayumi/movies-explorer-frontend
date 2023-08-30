import Footer from "../../common/Footer";
import SearchForm from "./SearchForm";
import MoviesCardList from "../common/MoviesCardList";

export default function Movies() {
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