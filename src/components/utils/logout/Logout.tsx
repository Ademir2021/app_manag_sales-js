import { useContext, useEffect } from 'react';
import { AuthContext } from "../../../context/auth";

export const Logout = (): void => {
    const { logout }: any = useContext(AuthContext);
    const handleLogout = (): void => {
        logout()
    };

    useEffect(() => {
        handleLogout()
    }, ); 
}