import './index.css';
import AuthTitle from "../AuthTitle";
import AuthForm from "../AuthForm";
import AuthButton from '../AuthButton';
import AuthLink from '../AuthLink';

export default function Auth({ children, ...params }) {

    const { success, msg } = params.isSuccess;

    return (
    <main>
        <section className="auth">
            <AuthTitle title={params.title} />
            <AuthForm
                formName={params.formName}
                handleSubmit={params.handleSubmit}>
                {children}
                {!success && <span className="auth__form_type_error">{msg}</span>}
                <AuthButton title={params.buttonTitle} isValid={params.isValid} />
            </AuthForm>
            <AuthLink path={params.path} link={params.link} linkSpan={params.linkSpan} />
        </section>
    </main>
    )
}