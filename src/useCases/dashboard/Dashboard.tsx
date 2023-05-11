import { Links, } from "../../components/dashboard/Links"
import { useContext } from 'react';
import { AuthContext } from "../../context/auth";

export function Dashboard() {
    const { logout }: any = useContext(AuthContext);

    const res:any = localStorage.getItem('u')
    const user = JSON.parse(res)

    const handleLogout = () => {
        logout()
    }
    return (
        <>
            <Links />
            < br />
            <strong>DashBoard</strong> < br />< br />
            <strong> User Logado: <span
                style={{
                    color: "blue",
                    fontSize: "12px"
                }}>
                {"ID:"+user[0].id +"  Email:" + user[0].username}</span></strong> <br />< br />
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}