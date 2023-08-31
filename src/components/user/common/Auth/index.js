import './index.css';
import AuthTitle from "../AuthTitle";
import AuthForm from "../AuthForm";
import AuthButton from '../AuthButton';
import AuthLink from '../AuthLink';

export default function Auth({children, ...params}) {
    return (
        <main className="auth">
            <AuthTitle title={params.title} />
            <AuthForm formName={params.formName}>
                {children}
            </AuthForm>
            <AuthButton title={params.buttonTitle} />
            <AuthLink path={params.path} link={params.link} linkSpan={params.linkSpan} />
        </main>
    )
}