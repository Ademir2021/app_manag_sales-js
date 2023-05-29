type PropsButton ={
    children:string;
    onSubmit:"submit" | "button" | "reset" | undefined
}

export function Button({ children, onSubmit }:PropsButton) {
    return (
        <button type={onSubmit} className="button-login">
            {children}
        </button>
    )
}