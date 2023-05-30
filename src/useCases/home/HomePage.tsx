import { NavBar } from "../../components/navbar/Navbar";

export function HomePage() {

    const home = '/#'
    const register = '/register#'
    const update = '/user_update#'
    const login = '/login#'
    const sale = '/sale#'

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
            <header style={{backgroundColor:''}}>
                <br />
            <h1>Home</h1>
            <strong>Usuário Deslogado: <span>Null</span></strong>< hr />
            </header>
        </>
    )
}