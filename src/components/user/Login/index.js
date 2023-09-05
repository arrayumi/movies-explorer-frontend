import Auth from "../common/Auth";
import AuthInput from "../common/AuthInput";

import { useState } from "react";

export default function Login({ handleLogin }) {

    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = formValue;
        handleLogin({ email, password });
    }

    return (
        <Auth
            title="Рады видеть!"
            buttonTitle="Войти"
            path="/signup"
            link="Регистрация"
            linkSpan="Ещё не зарегистрированы?"
            formName="login-form"
            handleSubmit={handleSubmit}>
            <AuthInput type="email" name="email" span="E-Mail" handleChange={handleChange} />
            <AuthInput type="password" name="password" span="Пароль" handleChange={handleChange} />
        </Auth>
    )
}