import './index.css';
import { CurrentUserContext } from '../../../../contexts/CurrentUserContext';
import { useContext, useEffect } from 'react';

export default function ProfileInput(props) {
    const currentUser = useContext(CurrentUserContext);

    function inputCheck(inputName, value) {
        if (currentUser[inputName] !== value) {
            return props.setIsDisabled(false);
        } else {
            return props.setIsDisabled(true);
        }
    }

    useEffect(() => {
        inputCheck(props.name, props.value)
    }, [props.value])



    return (
        <label className="profile__input-container">
            <span className="profile__input-title">{props.title}</span>
            <input
                className="profile__input"
                name={props.name}
                placeholder={props.placeholder}
                minLength={2}
                maxLength={30}
                disabled={!props.isEditMode}
                onChange={props.handleChange}
                value={props.value}
            ></input>
        </label>
    )
}