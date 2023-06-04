import { NavBar } from "../../components/navbar/Navbar";

export function HomePage() {

    const home = '/#'
    const register = '/register#'
    const update = '/user_update#'
    const login = '/login#'
    const sale = '/sale#'

    const color = "blue" || "red"

    return (
        <>
            <NavBar
                home={home}
                register={register}
                update={update}
                login={login}
                person={''}
                product={''}
                sale={sale}
                listPerson={''}
                listProduct={''}
                listSale=""
                usersList=""
            />
            <header style={{color:color}}>
                <br />
            <h1>Home</h1>
            <p style={{color:color}}>Usuário Deslogado: <span style={{color:color}}>{'!!'}</span></p>< hr />
            </header>
        </>
    )
}