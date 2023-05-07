import { Links, } from "../../components/dasboard/Links"
import { useContext } from 'react';
import { AuthContext } from "../../context/auth";

export function Dasboard() {
    const { logout }: any = useContext(AuthContext);

    const handleLogout = () => {
        logout()
    }
    return (
        <>
            <strong>Dasboard</strong> < br />
            <button onClick={handleLogout}>Logout</button>
            <Links />
        </>
    )
}