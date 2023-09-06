import './index.css';
import Header from '../../common/Header';
import ProfileInput from './ProfileInput';
import ProfileSaveButton from './ProfileSaveButton';
import ProfileLink from './ProfileLink';

export default function Profile({userData}) {
    const editMode = false;

    console.log(userData)
    return (
        <>
            <Header isAuthorized={true} />
            <main>
                <section className="profile">
                    <h1 className="profile__title">{`Привет, ${userData.name}`}</h1>

                    <form className="profile__form">
                        <ProfileInput title="Имя" placeholder={userData.name} />
                        <ProfileInput title="E-mail" placeholder={userData.email} />
                    </form>

                    {editMode ?
                        <ProfileSaveButton errorMessage="При обновлении профиля произошла ошибка." />
                        :
                        <ul className="profile__links-list">
                            <li>
                                <ProfileLink link="/profile" text="Редактировать" />
                            </li>
                            <li>
                                <ProfileLink link="/" text="Выйти из аккаунта" className="profile__link_type_logout" />
                            </li>
                        </ul>
                    }
                </section>
            </main>
        </>
    )
}