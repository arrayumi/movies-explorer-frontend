import './index.css';
import Header from '../../common/Header';
import ProfileInput from './ProfileInput';

export default function Profile() {
    return (
        <>
            <Header isAuthorized={true}/>
            <main className="profile">
                <h1 className="profile__title">Привет, Анна!</h1>

                <form className="profile__form">
                    <ProfileInput title="Имя" placeholder="Анна" />
                    <ProfileInput title="E-mail" placeholder="pochta@yandex.ru" />
                </form>
                <ul className="profile__links-list">
                    <li>
                        <button className="profile__link" type="button">
                            Редактировать
                        </button>
                    </li>
                    <li>
                        <button className="profile__link profile__link_type_logout" type="button">
                            Выйти из аккаунта
                        </button>
                    </li>
                </ul>
            </main>
        </>
    )
}