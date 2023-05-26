import { useContext } from 'react';
import { AuthContext } from "../../context/auth";
import { NavBar } from '../../components/navbar/Navbar';

const home = '/dashboard'
const register = '/register'
const update = '/user_update'
const login = '/logout'
const person = '/form_person'
const product = './form_product'
const sale = '/sale'
const listPerson = '/list_person'
const listProduct = '/list_product'

export function Dashboard() {
    const { logout }: any = useContext(AuthContext);

    const res: any = localStorage.getItem('u')
    const user = JSON.parse(res)

    const handleLogout = () => {
        logout()
    }
    return (
        <>
            <NavBar
                home={home}
                register={register}
                update={update}
                login={login}
                person={person}
                product={product}
                sale={sale}
                listPerson={listPerson}
                listProduct={listProduct}
            />
            < br />
            <strong>DashBoard</strong> < br />< br />
            <strong> User Logado: <span
                style={{
                    color: "blue",
                    fontSize: "12px"
                }}>
                {"ID:" + user[0].id + "  Email:" + user[0].username}</span></strong> <br />< br />
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}