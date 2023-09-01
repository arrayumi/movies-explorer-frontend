import './index.css';
import Navigation from '../Navigation';

export default function NavPopup() {
    return (
        <div className="nav-popup nav-popup_active">
            <div className="nav-popup__container">
            <Navigation isAuthorized={true} isPopup={true}/>
            <button className="nav-popup__close-button"></button>
            </div>
        </div>
    )
}