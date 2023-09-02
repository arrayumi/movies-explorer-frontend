import Auth from "../common/Auth";
import AuthInput from "../common/AuthInput";

export default function Register() {
    return (
        <Auth
            title="Добро пожаловать!"
            buttonTitle="Зарегистрироваться"
            path="/signin"
            link="Войти"
            linkSpan="Уже зарегистрированы?">
            <AuthInput type="text" name="name" span="Имя" />
            <AuthInput type="email" name="email" span="E-Mail" />
            <AuthInput type="password" name="password" span="Пароль" />
        </Auth>
    )
}