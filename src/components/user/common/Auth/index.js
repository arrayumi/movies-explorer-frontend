import './index.css';
import AuthTitle from "../AuthTitle";
import AuthForm from "../AuthForm";
import AuthButton from '../AuthButton';
import AuthLink from '../AuthLink';
import { useEffect } from 'react';

export default function Auth({ children, ...props }) {

    const { success, msg } = props.isSuccess;

    useEffect(()=> props.setIsSuccess({
        success: true,
        msg: ""
    }), [])

    return (
    <main>
        <section className="auth">
            <AuthTitle title={props.title} />
            <AuthForm
                formName={props.formName}
                handleSubmit={props.handleSubmit}>
                {children}
                {!success && <span className="auth__form_type_error">{msg}</span>}
                <AuthButton title={props.buttonTitle} isValid={props.isValid} sendingData={props.sendingData}/>
            </AuthForm>
            <AuthLink path={props.path} link={props.link} linkSpan={props.linkSpan} />
        </section>
    </main>
    )
}