import './index.css';

export default function Article({ sectionClassName, title, navLink, titleClassName, children }) {
    return (
        <section className={`page__element article-element ${sectionClassName}`} id={navLink}>
            <h2 className={`article-title ${titleClassName}`}>{title}</h2>
            {children}
        </section>
    )
}