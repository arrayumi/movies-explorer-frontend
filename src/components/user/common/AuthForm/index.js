import './index.css';

export default function AuthForm({formName, children}) {
    return (
        <form className="auth__form" name={formName}>
            {children}
        </form>
    )
}