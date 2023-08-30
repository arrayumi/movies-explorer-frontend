import './index.css';
import Promo from './Promo';
import NavTab from './NavTab';
import AboutProject from './AboutProject';
import Portfolio from './Portfolio';
import Techs from './Techs';
import AboutMe from './AboutMe';
import Footer from '../common/Footer';

export default function Main() {
    return (
        <>
            <main>
                <Promo />
                <NavTab />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            
            <Footer />
        </>
    )
}