import './index.css';

export default function ProfileSaveButton({ errorMessage }) {
    return (
        <div className="profile__button-container">
            {errorMessage ?
                <span class="profile__error-message">{errorMessage}</span> :
                null}
            <button type="submit" className="profile__button">Сохранить</button>
        </div>
    )
}