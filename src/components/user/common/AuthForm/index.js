import './index.css';

export default function AuthForm({formName, children, handleSubmit}) {
    return (
        <form className="auth__form" name={formName} onSubmit={handleSubmit}>
            {children}
        </form>
    )
}