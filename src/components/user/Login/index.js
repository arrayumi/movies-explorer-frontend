import Auth from "../common/Auth";
import AuthInput from "../common/AuthInput";

export default function Login() {
    return (
        <Auth
            title="Рады видеть!"
            buttonTitle="Войти"
            path="/signup"
            link="Регистрация"
            linkSpan="Ещё не зарегистрированы?"
            formName="login-form">
            <AuthInput type="email" name="email" span="E-Mail" />
            <AuthInput type="password" name="password" span="Пароль" />
        </Auth>
    )
}