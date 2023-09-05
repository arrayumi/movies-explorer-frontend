import './index.css';

export default function AuthButton({title}){
    return(
        <button className="auth__button" type="submit">{title}</button>
    )
}