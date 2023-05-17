import { useContext } from 'react';
import { AuthContext } from "../../context/auth";
import { NavBar } from '../../components/navbar/Navbar';

const register = './register'
const home = './'
const user_update = './user_update'
const login = './'

export function Dashboard() {
    const { logout }: any = useContext(AuthContext);

    const res:any = localStorage.getItem('u')
    const user = JSON.parse(res)

    const handleLogout = () => {
        logout()
    }
    return (
        <>
            <NavBar
             register={register}
             home={home}
             user_update={user_update}
             login={login}
            />
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