import './index.css';
import Header from '../../common/Header';
import ProfileInput from './ProfileInput';
import ProfileSaveButton from './ProfileSaveButton';
import ProfileLink from './ProfileLink';
import useFormWithValidation from '../../../hooks/UseFormWithValidation';

import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

export default function Profile({ isLoggedIn, isSuccess, setIsSuccess, handleEditProfile, isEditMode, setIsEditMode, handleLogout }) {

    const currentUser = useContext(CurrentUserContext);

    const { values, handleChange, errors, isValid, resetForm, setValues, setIsValid } =
        useFormWithValidation();

    const { success, msg } = isSuccess;


    // const isDisabled =!isValid ||
    // (currentUser.name === values.name && currentUser.email === values.email);

    const [isDisabled, setIsDisabled] = useState(true);

    // useEffect(() => {
    //     resetForm();
    // }, [success]);


    useEffect(() => {
        setIsEditMode(false);
        setIsValid(false);
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        const { name, email } = values;
        handleEditProfile({ name, email });
    }

    function clickEditButton() {
        setIsEditMode(true);
        setIsSuccess({
            success: false,
            msg: "",
        })
    }
    console.log(isDisabled)
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main>
                <section className="profile">
                    <h1 className="profile__title">{`Привет, ${currentUser.name}`}</h1>

                    <form className="profile__form" onSubmit={handleSubmit} noValidate>
                        <ProfileInput
                            title="Имя"
                            name="name"
                            placeholder={currentUser.name}
                            isEditMode={isEditMode}
                            handleChange={handleChange}
                            value={values.name ?? ''}
                            error={errors.name}
                            setIsDisabled={setIsDisabled} />
                        <ProfileInput
                            title="E-mail"
                            name="email"
                            placeholder={currentUser.email}
                            isEditMode={isEditMode}
                            handleChange={handleChange}
                            value={values.email ?? ''}
                            error={errors.email}
                            setIsDisabled={setIsDisabled} />
                        {isEditMode && <ProfileSaveButton errorMessage={msg} isDisabled={isDisabled} isValid={isValid}/>}
                    </form>
                    {success && <span className="profile__success-msg">{msg}</span>}
                    {!isEditMode &&
                        <ul className="profile__links-list">
                            <li>
                                <button type="button" className="profile__button profile__button_type_edit" onClick={clickEditButton}>Редактировать</button>
                            </li>
                            <li>
                                <ProfileLink link="/" text="Выйти из аккаунта" className="profile__link_type_logout" onClick={handleLogout} />
                            </li>
                        </ul>
                    }
                </section>
            </main>
        </>
    )
}