import { useContext } from 'react';
import { AuthContext } from "../../context/auth";
import { NavBar } from '../../components/navbar/Navbar';

const register = './register'
const home = './dashboard'
const update = './user_update'
const login = './'

const person = './form_person'

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
             update={update}
             login={login}
             person={person}
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