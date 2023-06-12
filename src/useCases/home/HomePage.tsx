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
                upPerson=""
                uṕProduct=""
            />
            <header style={{color:"blue", padding:'0.5rem'}}>
            <strong>Home</strong>
            <p style={{color:"blue"}}>Usuário Deslogado: <span style={{color:"blue"}}>{'!!'}</span></p>
            </header>
            
        </>
    )
}