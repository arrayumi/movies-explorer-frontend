import Auth from "../common/Auth";
import AuthInput from "../common/AuthInput";

import useFormWithValidation from "../../../hooks/UseFormWithValidation";

import { useEffect } from "react";

export default function Login({ handleLogin, isSuccess, setIsSuccess, sendingData}) {

    const { values, handleChange, errors, isValid, resetForm, setValues, setIsValid } =
        useFormWithValidation();

    const { success } = isSuccess;

    useEffect(() => {
        resetForm();
    }, [success]);


    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = values;
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
            handleSubmit={handleSubmit}
            isSuccess={isSuccess}
            setIsSuccess={setIsSuccess}
            isValid={isValid}
            sendingData={sendingData}>
            <AuthInput type="email"
                name="email"
                span="E-Mail"
                handleChange={handleChange}
                value={values.email ?? ''}
                error={errors.email}
                sendingData={sendingData} />
            <AuthInput type="password"
                name="password"
                span="Пароль"
                handleChange={handleChange}
                value={values.password ?? ''}
                error={errors.password}
                sendingData={sendingData} />
        </Auth>
    )
}