import './index.css';

export default function ProfileSaveButton({ errorMessage,isValid }) {
    return (
        <div className="profile__button-container">
            {errorMessage ?
                <span class="profile__error-message">{errorMessage}</span> :
                null}
            <button type="submit" className="profile__button" disabled={isValid}>Сохранить</button>
        </div>
    )
}