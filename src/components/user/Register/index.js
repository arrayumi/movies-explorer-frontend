import Auth from "../common/Auth";
import AuthInput from "../common/AuthInput";
import { useState } from "react";

export default function Register({ handleRegister }) {
    const [formValue, setFormValue] = useState({
        name: '',
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
        const { name, email, password } = formValue;
        handleRegister({ name, email, password })
    }

    return (
        <Auth
            title="Добро пожаловать!"
            buttonTitle="Зарегистрироваться"
            path="/signin"
            link="Войти"
            linkSpan="Уже зарегистрированы?"
            handleSubmit={handleSubmit}>
            <AuthInput type="text" name="name" span="Имя" handleChange={handleChange} value={formValue.name}/>
            <AuthInput type="email" name="email" span="E-Mail" handleChange={handleChange} value={formValue.email}/>
            <AuthInput type="password" name="password" span="Пароль" handleChange={handleChange} value={formValue.password}/>
        </Auth>
    )
}