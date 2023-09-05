import './index.css';

export default function Input({title, placeholder}) {
    return (
        <label className="profile__input-container">
            <span className="profile__input-title">{title}</span>
            <input className="profile__input" placeholder={placeholder} minLength={2} maxLength={30}></input>
        </label>
    )
}