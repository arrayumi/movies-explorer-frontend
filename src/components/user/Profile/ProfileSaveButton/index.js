import './index.css';

export default function ProfileSaveButton({ errorMessage, isValid, isDisabled, sendingData}) {

    return (
        <div className="profile__button-container">
            {errorMessage ?
                <span className="profile__error-message">{errorMessage}</span> :
                null}
            <button type="submit" className="profile__button profile__button_type_save" disabled={!isValid || isDisabled || sendingData}>Сохранить</button>
        </div>
    )
}