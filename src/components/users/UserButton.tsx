export function Button({ children, submit }: any) {
    return (
        <button type={submit} className="button-login">
            {children}
        </button>
    )
}