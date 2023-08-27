export default function Article({ sectionClassName, title, navLink, titleClassName, children }) {
    return (
        <section className={`page__element ${sectionClassName}`} id={navLink}>
            <h2 className={titleClassName}>{title}</h2>
            {children}
        </section>
    )
}