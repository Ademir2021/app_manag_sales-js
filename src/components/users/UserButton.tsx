import "./UserButton.css"

export function Button({ children, submit }: any) {

    return (
        <button type={submit} className="button">
            {children}
        </button>
    )
}