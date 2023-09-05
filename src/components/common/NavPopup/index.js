import './index.css';
import Navigation from '../Navigation';

export default function NavPopup() {

    function onClick() {
        document.querySelector('.nav-popup').classList.remove('nav-popup_active');
    }

    return (
        <div className="nav-popup">
            <div className="nav-popup__container">
            <Navigation isAuthorized={true} isPopup={true}/>
            <button className="nav-popup__close-button" type="button" onClick={onClick}></button>
            </div>
        </div>
    )
}