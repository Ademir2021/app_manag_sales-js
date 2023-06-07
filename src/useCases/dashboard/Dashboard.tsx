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
    const listSale = '/list_sale#'
    const listUser = '/users_list#'
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
                listSale={listSale}
                usersList={listUser}
            />
            <header style={{color:'blue', padding:'0.5rem'}}>
            <strong>Dashboard</strong>
           <p style={{color:"red", fontSize:"12px"}}>{"Cod. 0" + user[0].id +" "+ user[0].username}</p>
            <button style={{color:'blue', border:'none'}} onClick={handleLogout}>Logout</button>
            </header>
        </>
    )
}