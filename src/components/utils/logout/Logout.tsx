export function Logout() {
    localStorage.removeItem('u');
    return (
        <>
            {
                window.location.replace(
                    "/")
            }
        </>
    )
}