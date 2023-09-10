import './index.css';

export default function AuthButton({ title, isValid, sendingData }) {
    return (
        <button className="auth__button" type="submit" disabled={!isValid || sendingData}>{title}</button>
    )
}