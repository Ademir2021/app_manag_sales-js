import { useContext } from 'react';
import { AuthContext } from "../../context/auth";
import { NavBar } from '../../components/navbar/Navbar';

export function Dashboard() {

    const home = '/dashboard#'
    const register = '/register#'
    const update = '/user_update#'
    const login = '/logout'
    const person = '/form_person#'
    const product = './form_product#'
    const sale = '/sale#'
    const listPerson = '/person_list#'
    const listProduct = '/product_list#'
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
            <header style={{backgroundColor:''}}>
            < br />
            <h1>Painel Principal</h1>
            <strong> User Logado: <span
                style={{color: "blue",fontSize: "12px"}}>
                {"ID:" + user[0].id + "  Email:" + user[0].username}</span></strong> <hr />
            </header>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}