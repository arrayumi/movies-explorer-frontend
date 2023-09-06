import { useState, useCallback } from 'react';

export default function useFormWithValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(true);

    const _isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const _isValidName = (name) => {
        return /[A-Za-zА-Яа-яЁё\s-]+/.test(name);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            if (!_isValidEmail(value)) {
                e.target.setCustomValidity("Некорректый адрес почты.");
            } else {
                e.target.setCustomValidity("");
            }
        }

        if (name === "name") {
            if (!_isValidName(value)) {
                e.target.setCustomValidity("Поле name должно содержать только латиницу, кириллицу, пробел или дефис.");
            } else {
                e.target.setCustomValidity("");
            }
        }

        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: e.target.validationMessage });
        setIsValid(e.target.closest("form").checkValidity());
    };



    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
    }, [setValues, setErrors, setIsValid]);

    return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}
