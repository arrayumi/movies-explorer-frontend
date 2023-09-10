import Auth from "../common/Auth";
import AuthInput from "../common/AuthInput";
import { useEffect } from "react";
import useFormWithValidation from "../../../hooks/UseFormWithValidation";

export default function Register({ handleRegister, isSuccess, setIsSuccess }) {

    const { values, handleChange, errors, isValid, resetForm, setValues, setIsValid } =
        useFormWithValidation();

    const { success } = isSuccess;

    useEffect(() => {
        resetForm();
    }, [success]);


    function handleSubmit(e) {
        e.preventDefault();
        const { name, email, password } = values;
        handleRegister({ name, email, password });
    }

    return (
        <Auth
            title="Добро пожаловать!"
            buttonTitle="Зарегистрироваться"
            path="/signin"
            link="Войти"
            linkSpan="Уже зарегистрированы?"
            handleSubmit={handleSubmit}
            isValid={isValid}
            isSuccess={isSuccess}
            setIsSuccess={setIsSuccess}>
            <AuthInput type="text" 
            name="name" 
            span="Имя" 
            handleChange={handleChange} 
            value={values.name ?? ''} 
            error={errors.name}
            />
            <AuthInput type="email" 
            name="email" 
            span="E-Mail" 
            handleChange={handleChange} 
            value={values.email ?? ''} 
            error={errors.email}
            />
            <AuthInput type="password" 
            name="password" 
            span="Пароль" 
            handleChange={handleChange} 
            value={values.password ?? ''} 
            error={errors.password}
            />
        </Auth>
    )
}