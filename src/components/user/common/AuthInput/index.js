import './index.css';

export default function AuthInput({ ...params }) {



    // useEffect(() => {
    //     resetForm();
    // }, [success]);

    const handleRemoveError = () => {
        params.setIsSuccess({
            success: true,
            msg: "",
            open: false,
        });
    };

    return (
        <label className="auth__input-field">
            <span className="auth__input-span">{params.span}</span>
            <input className={`auth__input ${params.error ? 'auth__input_type_error' : ''}`}
                type={params.type}
                name={params.name}
                required
                minLength={params.type === 'password' ? 8 : 2}
                maxLength={30}
                placeholder={params.name}
                onChange={params.handleChange}
                value={params.value}></input>
            <span className="auth__input-error">
                {params.error}
            </span>
        </label>
    )
}