import { Links, } from "../../components/dashboard/Links"
import { useContext } from 'react';
import { AuthContext } from "../../context/auth";

export function Dashboard() {
    const { logout }: any = useContext(AuthContext);

    const handleLogout = () => {
        logout()
    }
    return (
        <>
            <strong>Dashboard</strong> < br />
            <button onClick={handleLogout}>Logout</button>
            <Links />
        </>
    )
}