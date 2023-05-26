type Links = {
    title: string;
    link: any;
    company: string;
    message: string;
    alert: string
}
export function UserLink({
    title,
    link,
    company,
    message,
    alert }: Links) {
    return (
        <>
            <strong className='login-text'>{title}!&nbsp;
                {link}</strong>
            <span className='login-company'>{company}</span>
            <span className='login-message'>{message}</span>
            <span className='login-alert'>{alert}</span>
        </>
    )
}
