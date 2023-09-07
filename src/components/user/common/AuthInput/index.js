import './index.css';

export default function AuthInput(props) {



    // useEffect(() => {
    //     resetForm();
    // }, [success]);

    // const handleRemoveError = () => {
    //     props.setIsSuccess({
    //         success: true,
    //         msg: "",
    //         open: false,
    //     });
    // };

    return (
        <label className="auth__input-field">
            <span className="auth__input-span">{props.span}</span>
            <input className={`auth__input ${props.error ? 'auth__input_type_error' : ''}`}
                type={props.type}
                name={props.name}
                required
                minLength={props.type === 'password' ? 8 : 2}
                maxLength={30}
                placeholder={props.name}
                onChange={props.handleChange}
                value={props.value}></input>
            <span className="auth__input-error">
                {props.error}
            </span>
        </label>
    )
}