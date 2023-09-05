import './index.css';
import AuthTitle from "../AuthTitle";
import AuthForm from "../AuthForm";
import AuthButton from '../AuthButton';
import AuthLink from '../AuthLink';

export default function Auth({ children, ...params }) {
    return (
        <main>
            <section className="auth">
                <AuthTitle title={params.title} />
                <AuthForm formName={params.formName} handleSubmit={params.handleSubmit}>
                    {children}
                    <AuthButton title={params.buttonTitle} />
                </AuthForm>
                <AuthLink path={params.path} link={params.link} linkSpan={params.linkSpan} />
            </section>
        </main>
    )
}