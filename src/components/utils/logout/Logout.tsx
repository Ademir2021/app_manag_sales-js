import { useContext } from 'react';
import { AuthContext } from "../../../context/auth";

export function Logout(): void {
    const { logout }: any = useContext(AuthContext);
    function handleLogout(): void {
        logout()
    }

    return (handleLogout())
}