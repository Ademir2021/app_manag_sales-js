import { NavBar } from "../../components/navbar/Navbar";

export function HomePage() {

    const home = '/#'
    const register = '/register#'
    const update = '/user_update#'
    const login = '/login#'
    const sales = '/sale#'

    return (
        <>
            <NavBar
                home={home}
                register={register}
                update={update}
                login={login}
                person={''}
                product={''}
                sale={sales}
                listPerson={''}
                listProduct={''}
            />
            <strong>Home</strong> < br />
        </>
    )
}