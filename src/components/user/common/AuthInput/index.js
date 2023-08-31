import './index.css';

export default function AuthInput({...params}) {
    const errorText = '';
    return (
        <label className="auth__input-field">
            <span className="auth__input-span">{params.span}</span>
            <input className="auth__input" type={params.type} name={params.name} required></input>
            <span className="auth__input-error">{errorText}</span>
        </label>
    )
}