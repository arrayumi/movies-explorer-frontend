import './index.css';

export default function AuthButton({ title, isValid }) {
    return (
        <button className="auth__button" type="submit" disabled={!isValid}>{title}</button>
    )
}