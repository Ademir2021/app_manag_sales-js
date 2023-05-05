type Links = {
    title: string;
    link: any;
    company: string;
}
export function UserLink({ title, link, company }: Links) {
    return (
        <>
            <strong className='login-text'>{title}!&nbsp;
                {link}</strong>
            <span className='login-company'>{company}</span>
        </>
    )
}
